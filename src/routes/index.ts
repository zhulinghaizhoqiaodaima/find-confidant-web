import Index from "../pages/Home/index.vue";
import Team from "../pages/TeamPage.vue";
import User from "../pages/UserPage.vue";
import Search from "../pages/SearchPage.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";



const routes=[
    {path: '/',component: Index},
    {path: '/team',component: Team},
    {path: '/user',component: User},
    {path: '/search',component: Search},
    {path: '/user/edit', component: UserEditPage },
    { path: '/user/list', component: SearchResultPage },
]

export default routes;