import { createRouter, createWebHashHistory ,createWebHistory } from "vue-router"
const routes = [
    {
        path: "/",
        name: 'Home',
        component: () => import(/* webpackChunkName : "home" */ "@/views/index.vue")
        
    },
    {
        path: "/register",
        name: 'Register',
        meta: {
            layout : 'auth'
        } ,
        component: ()=> import(/* webpackChunkName : "home" */ "@/views/auth/register.vue")
    },
    {
        path: "/login",
        // name: 'Login',
        meta: {
            layout : 'default'
        } ,
        component: ()=> import(/* webpackChunkName : "home" */ "@/views/auth/login.vue")
    },
    {
        path: "/verify-booking",
        name: 'verify',
        meta: {
            layout : 'default'
        } ,
        component: ()=> import(/* webpackChunkName : "home" */ "@/components/verify/verify.vue")
    },
    {
        path: "/handbook",
        name: 'handbook',
        component: () => import(/* webpackChunkName : "home" */ "@/views/HomeDetails/handbook/handbookAll.vue"),
        children: [
            {
              path: '',
                component: () => import(/* webpackChunkName : "home" */ "@/views/HomeDetails/handbook/moreHandbook.vue"),
            },
            {
                path: ':id',
                component :() =>import("@/views/HomeDetails/handbook/handbookDetail.vue")           
            }
        ]
    },
    {
        path: "/doctor",
        name: 'doctorDetails',
        meta: {
            layout : 'default'
        } ,
        component: () => import(/* webpackChunkName : "home" */ "@/views/Home/Doctor/doctorAll.vue"),
        children: [
            {

              path: '',
                component: () => import(/* webpackChunkName : "home" */ "@/views/Home/Doctor/handleDoctor.vue"),
            },
            {
                path: ':id',
                component :() =>import("@/views/Home/Doctor/detailsDoctor.vue")
                
            }
        ]
    },
    {
        path: "/special",
        name: 'specialDetail',
        meta: {
            layout : 'default'
        } ,
        component: () => import(/* webpackChunkName : "home" */ "@/views/HomeDetails/specialty/specialtyAll.vue"),
        children: [
            {

              path: '',
                component: () => import(/* webpackChunkName : "home" */ "@/views/HomeDetails/specialty/handleSpecial.vue"),
            },
            {
                path: ':id',
                component :() =>import("@/views/HomeDetails/specialty/detailSpecial.vue")
                
            }
        ]
    },
    {
        path: "/doctor/manager",
        name: 'Doctor',
        meta: {
            layout : 'auth'
        } ,
        component: () => import(/* webpackChunkName : "home" */ "@/views/Doctor/doctor.vue"),
        children: [
            {
                path: 'manager-schedule',
                  component: () => import(/* webpackChunkName : "home" */ "@/views/Doctor/doctor-schedule/ScheduleDetails.vue"),
    
            },
            {
                path: 'manager-patient',
                  component: () => import(/* webpackChunkName : "home" */ "@/views/Doctor/doctor-patient/PatientList.vue"),
    
            },
            {
                path: 'manager-history',
                  component: () => import(/* webpackChunkName : "home" */ "@/views/Doctor/doctor-history/doctorHistory.vue"),
    
            },
            {
                path: 'manager-posts',
                  component: () => import(/* webpackChunkName : "home" */ "@/views/Doctor/doctor-posts/doctorPost.vue"),
    
            },

          ],

    },
    {
        path: "/system",
        name: 'System',
        meta: {
            layout : 'auth'
        } ,
        component: () => import(/* webpackChunkName : "home" */ "@/views/system/system.vue"),
        children: [
            {
              // UserProfile will be rendered inside User's <router-view>
              // when /user/:id/profile is matched
              path: 'manager-account',
                component: () => import(/* webpackChunkName : "home" */ "@/views/system/manager-user/managerAccount.vue"),
                children: [
                    {
                        path: '',
                        component :() =>import("@/views/system/manager-user/form/createUser.vue")
                        
                    },
                    {
                        path: ':id',
                        component :() =>import("@/views/system/manager-user/form/editUser.vue")
                        
                    }
                ]
            },
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: 'manager-user',
                  component: () => import(/* webpackChunkName : "home" */ "@/views/system/manager-user/managerUser.vue"),
    
            },
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: 'manager-doctor',
                  component: () => import(/* webpackChunkName : "home" */ "@/views/system/manager-doctor/managerDoctor.vue"),
    
            },
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: 'manager-schedule',
                  component: () => import(/* webpackChunkName : "home" */ "@/views/system/manager-schedule/managerSchedule.vue"),
    
            },
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: 'manager-patient',
                component: () => import(/* webpackChunkName : "home" */ "@/views/system/manager-patient/handlePatient.vue"),
                children: [
                    {
                        path: '',
                        component :() =>import("@/views/system/manager-patient/managerPatient.vue")
                        
                    },
                    {
                        path: 'history',
                        component :() =>import("@/views/system/manager-patient/listConfirmPatient.vue")
                        
                    }
     
                ]
    
            },
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: 'dashboard',
                  component: () => import(/* webpackChunkName : "home" */ "@/views/system/dashboard/dashboard.vue"),
    
            },
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: 'manager-special',
                  component: () => import(/* webpackChunkName : "home" */ "@/views/system/manager-specialy/managerSpecial.vue"),
    
            },
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: 'manager-clinic',
                  component: () => import(/* webpackChunkName : "home" */ "@/views/system/manager-clinic/managerClinic.vue"),
    
            },
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: 'manager-handbook',
                component: () => import(/* webpackChunkName : "home" */ "@/views/system/manager-handbook/managerHandbook.vue"),
                children: [
                    {
                        path: '',
                        component :() =>import("@/views/system/manager-handbook/listBlogManage.vue")
                        
                    },
                    {
                        path: 'create-handbook',
                        component :() =>import("@/views/system/manager-handbook/handleHandBook.vue")
                        
                    },
                    {
                        path: 'create-handbook/:id',
                        component :() =>import("@/views/system/manager-handbook/editHandBook.vue")
                        
                    }
                ]
    
              },
            // {
            //     // UserProfile will be rendered inside User's <router-view>
            //     // when /user/:id/profile is matched
            //     path: 'manager-account/:id',
            //     component: () => import(/* webpackChunkName : "home" */ "@/views/system/manager-user/form/editUser.vue"),
            //   },
            // {
            //   // UserPosts will be rendered inside User's <router-view>
            //   // when /user/:id/posts is matched
            //   path: 'posts',
            //   component: UserPosts,
            // },
          ],
    },
    // {
    //     path: "/:pathMatch(.*)*",
    //     component: NotFound,
    // }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
router.beforeEach((to, from, next) => {
    const protectedPages = ['/system', '/doctor/manager'];
    const loggedIn = localStorage.getItem('access_token');
  
    if (protectedPages.some(page => to.path.startsWith(page)) && !loggedIn) {
      return next('/login');
    }
  
    next();
  });
export default router