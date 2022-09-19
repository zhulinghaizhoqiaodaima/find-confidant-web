<template>
    <form action="/">
      <van-search
          v-model="searchTest"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
      />
    </form>
  
    <van-divider content-position="left">已选标签</van-divider>
    <div v-if="activeIds.length===0">请选择标签</div>
  
    <van-row gutter="16" style="padding: 0 16px">
      <van-col v-for="tag in activeIds" span="8">
        <van-tag  closeable size="small" type="primary" @close="doClose(tag)">
          {{ tag  }}
        </van-tag>
      </van-col>
    </van-row>
  
    <van-divider content-position="left">选择标签</van-divider>
    <van-tree-select
        v-model:active-id="activeIds"
        v-model:main-active-index="activeIndex"
        :items="tagList"
    />
  
    <div style="padding: 12px">
      <van-button block type="primary" @click="doSearchResult">搜索</van-button>
    </div>
  
  </template>
  
  <script setup >
  import { ref } from 'vue';
  import { Toast } from 'vant';
  import {useRouter} from "vue-router";
  const router = useRouter()
  
  
  const originTagList=[
    {
      text: '编程语言',
      children: [
        { text: 'html', id: '1' },
        { text: 'java', id: '2' },
        { text: '杭州', id: '3' },
        { text: '杭州', id: '4' },
        { text: 'go', id: '5' },
      ],
    },
    {
      text: '江苏',
      children: [
        { text: '南京', id: 6 },
        { text: '无锡', id: 7 },
      ],
    },
  ];
  
  
  
  
  const tagList = ref(originTagList);
  
  const searchTest = ref('');
  
  const teee = originTagList.map(parentTag=>{
    const tempChildren = [...parentTag.children];
    // const tempParentTag = {...parentTag};
    // tempParentTag.children = tempChildren.filter(item=>item.text.includes(searchTest.value));
    return tempChildren;
  }) ;
  console.log(teee);
  
  const onSearch = (val) => {
    tagList.value = originTagList.map(parentTag=>{
      const tempChildren = [...parentTag.children];
      const tempParentTag = {...parentTag};
      tempParentTag.children = tempChildren.filter(item=>item.text.includes(searchTest.value));
      return tempParentTag;
    })
  
  };
  const onCancel = () => {
    searchTest.value="";
    tagList.value = originTagList;
  }
  
  const activeIds = ref([]);
  const activeIndex = ref(0);
  
  
  const doClose = (tag) =>{
    activeIds.value = activeIds.value.filter(item=>{
      return item!==tag;
    })
  }
  
  /**
   * 执行搜索
   */
  const doSearchResult = () => {
    router.push({
      path: '/user/list',
      query: {
        tags: activeIds.value
      }
    })
  }
  
  </script>
  
  <style scoped>
  
  </style>