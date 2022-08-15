import { createI18n } from 'vue-i18n'

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
  
*/

const messages= {
    en: {
        "general": {
            "homepage": "Home page for the NeRF or nothing project.",
        },
        "main_page":{
            "home": "home",
            "upload_v":"Upload video",
            "upload":"Upload a video and send it to the server: ",
            "drag": "drag or select video file",
            "send": "send",
            "ourteam": "Our team",
        },
        "about_page":{
            "About NeRF": "About NeRF",
            "about_NeRF_detail":"About Neural Radiance Fields",
            "What is NeRF?": "What is NeRF?",
            "summary": "In the last two years there has been an explosion of research surrounding NeRFs, or Neural Radiance Fields, as a new way to render 3D scenes from a set of 2D images. This technology is rapidly developing, and it may be the best path forwards to photorealistic rendering of viewpoints never before seen before by a camera. Many large research labs like Facebook AI and Google research are pursuing this technology in order to render realistic simulations for self-driving cars and to improve the usability of 3D scans. Our project, NeRF or Nothing, will be a web application based on this technology that allows people to input videos or collections of photos and render novel realistic views of the scene they captured. This will include the ability for users to create “flythroughs” or move virtual cameras through scene's they have captured to create videos from unseen perspectives.",
            "How_to_use": "How do I use this website?",
            "idk": "IDK dude"
        },
        "member_page":{
            "Eric_general": "Project Lead: Eric",
            "Eric_detail": "Eric Nelson, CS major. I'm interested in the machine learning and computer vision aspects of this project as well as ensuring everyone's individual success.",
            "Anthony_general": "Anthony",
            "Anthony_detail": "Anthony DiGiovanna, CS major. I'm fascinated by machine learning and artificial intelligence. Working with structure from motion and NeRFs on the backend.",
            "Amaan_general": "Amaan",
            "Amaan_detail": "Amaan Qureshi, RPI EE & Math dual who enjoys CS and reverse engineering in his free time and is working on the API for this project.",
            "Dylan_general": "Dylan",
            "Dylan_detail": "Dylan Taylor, CS major. I enjoy how computation is used to solve everyday problems, and I'm working more on the services and managing containers area of the project.",
            "Sam_general": "Sam",
            "Sam_detail": "Sam DeMarrais, a computer science and computational biology major. I'm working on the front end, and I hope to learn more about how machine learning, web servers, and websites function by working on this project.",
            "Yuk_Ting_general": "Yuk Ting",
            "Yuk_Ting_detail": "Yuk Ting Kong, CS major, building python web server with flask.",
            "Annie_general": "Annie Xu",
            "Annie_detail": "Annie Xu, CSE dual CS major at RPI. I am currently working on back end of the project with a focus on structure for motion. I looove snacking and badminton.",
            "Keqian_general": "Keqian",
            "Keqian_detail": "Keqian Wang, CS major, working on accepting video from front end with flask in python",
            "Grey_general": "Grey",
            "Grey_detail": "Grey Ding, CS & MATH dual major student, enjoy video games and movies, plan to clear Death Stranding by October, current struggling in Vue and Js",
            "Jackie_general": "Jackie",
            "Jackie_detail": "Jiawei (Jackie) Zhao. I am a RPI computor science dual ECON student and working on the front end portion of this project. Learning vue.js framwork, HTML, CSS along the way."
        }
    },
    cn :{
        "general": {
            "homepage": "NeRF or nothing!项目的主页",
        },
        "main_page":{
            "home": "主页",
            "upload_v":"上传视频",
            "upload":"上传一个视频并将其发送至服务器: ",
            "drag": "拖动或者选择文件",
            "send": "发送",
            "ourteam": "团队成员",
        },
        "about_page":{
            "About NeRF": "关于NeRF",
            "about_NeRF_detail":"关于神经辐射场",
            "What is NeRF?": "什么是NeRF?",
            "summary": "在过去两年内,关于NeRF(神经辐射场)的研究呈爆炸式增长. NeRF作为一种从2D图像渲染成3D场景的新技术,它发展的很快,并且这可能是实现相机从未能实现的逼真的视点渲染的最好方式.Facebook AI和谷歌研究所等大型研究实验室都在争取实现此方法,以便为自动驾驶汽车提供逼真的渲染模型,并且提高3D扫描的可用性.我们的项目(NeRF or nothing)将是一个基于此技术的网络应用,它会允许人们输入视频或者一系列照片,并将这些场景渲染成全新且逼真的视图.这将包括用户创建\"飞越\"或在他们捕获的场景中移动虚拟摄像机以从看不见的角度创建视频的能力。",
            "How_to_use": "我应该怎么使用这个网页?",
            "idk": "兄弟我不到啊"
        },
        "member_page":{
            "about_team": "关于我们的团队：",
            "Eric_general": "团队领队: Eric",
            "Eric_detail": "Eric Nelson, 计算机专业， 我对这个项目的机器学习和计算机视觉方面感兴趣，也对确保每个人的个人成功感兴趣。",
            "Anthony_general": "Anthony",
            "Anthony_detail": "Anthony DiGiovanna, 计算机专业， 我对机器学习和人工智能很着迷。在后端与来自运动的结构 (structure from motion) 和NeRFs (神经辐射场)合作。",
            "Amaan_general": "Amaan",
            "Amaan_detail": "Amaan Qureshi,电子工程和数学双专业,在空闲时间喜欢CS和逆向工程,正在为这个项目开发API。",
            "Dylan_general": "Dylan",
            "Dylan_detail": "Dylan Taylor, 计算机专业, 我喜欢如何用计算来解决日常问题，我现在更多的是在项目的服务和管理容器领域工作。",
            "Sam_general": "Sam",
            "Sam_detail": "Sam DeMarrais, 我是计算机科学和计算生物学专业的学生。我正在做前端的工作，我希望通过这个项目的工作，更多地了解机器学习、网络服务器和网站的功能。",
            "Yuk_Ting_general": "江钰婷",
            "Yuk_Ting_detail": "江钰婷,计算机专业, 负责用flask构建python网络服务器。",
            "Annie_general": "徐嘉莹",
            "Annie_detail": "徐嘉莹,我是RPI的计算机科学工程双计算科学专业的学生。我目前正在进行项目的后端工作, 重点是运动的结构。我喜欢吃零食和打羽毛球。",
            "Keqian_general": "王可芊",
            "Keqian_detail": "王可芊, 计算机科学专业, 致力于用python的flask从前端接受视频。",
            "Grey_general": "丁浩",
            "Grey_detail": "丁浩,计算机科学和数学双专业学生,喜欢视频游戏和电影,计划在10月前通关死亡搁浅。我在负责这个项目的前端,并且目前在Vue和Js中奋斗。",
            "Jackie_general": "赵家炜",
            "Jackie_detail": "赵家炜,我是RPI计算科学和经济学的双专业学生,正在从事这个项目的前端部分。我在一路学习vue.js框架、HTML、CSS。"
        }
    }
}
export default createI18n({
  legacy: false,
  locale:'cn',
  fallbackLocale:'en',
  messages: messages,
})
