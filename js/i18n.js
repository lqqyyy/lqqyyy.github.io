const translations = {
    zh: {
        // 导航
        'nav-home': '首页',
        'nav-research': '研究方向',
        'nav-team': '团队成员',
        'nav-publications': '科研成果',
        'nav-contact': '联系我们',
        'language': '语言',
        
        // 首页
        'hero-title': '突破人机交互与人工智能的边界',
        'hero-subtitle': '我们致力于探索人机交互与人工智能的前沿技术，创造更智能、更自然的人机交互体验。',
        'btn-learn-more': '了解研究方向',
        'btn-contact': '联系我们',
        
        // 实验室概览
        'overview-title': '实验室概览',
        'intelligent-interaction-title': '智能交互',
        'intelligent-interaction-desc': '研究自然、直观的人机交互方式，结合人工智能技术提升用户体验。',
        'cognitive-computing-title': '认知计算',
        'cognitive-computing-desc': '探索机器学习和认知科学的交叉领域，构建更智能的计算模型。',
        'ar-title': '增强现实',
        'ar-desc': '开发AR/VR技术，创造沉浸式交互体验，拓展人机交互的边界。',
        'view-more': '查看更多',

        // 研究亮点
        'highlights-title': '研究亮点',
        'highlight-1-title': '智能交互系统',
        'highlight-1-desc': '我们开发了一套基于多模态输入的智能交互系统，能够理解用户的语音、手势和面部表情，提供自然流畅的交互体验。',
        'highlight-2-title': '认知辅助技术',
        'highlight-2-desc': '我们正在研发针对特殊人群的认知辅助技术，通过AI算法分析用户行为模式，提供个性化的辅助建议。',
        'learn-more': '了解更多',

        // 最新动态
        'news-title': '最新动态',
        'news-1-month': '六月',
        'news-1-day': '15',
        'news-1-title': '实验室论文被SIGCHI 2023接收',
        'news-1-desc': '我们的研究成果《基于深度学习的情感识别交互系统》被SIGCHI 2023会议接收。',
        'news-2-month': '五月',
        'news-2-day': '28',
        'news-2-title': '实验室获得国家自然科学基金项目',
        'news-2-desc': '我们的项目《多模态人机交互中的认知计算研究》获得国家自然科学基金支持。',
        'news-3-month': '四月',
        'news-3-day': '10',
        'news-3-title': '实验室与科技公司建立产学研合作',
        'news-3-desc': '我们与领先的AI科技公司建立了产学研合作关系，共同推进人机交互技术的落地应用。',
        'view-details': '查看详情',
        'more-news': '查看更多动态',

        // 加入我们
        'join-us-title': '加入我们',
        'join-us-desc': '我们始终欢迎对人机交互和人工智能充满热情的优秀人才加入。无论您是研究生、博士生还是博士后，都可以在这里找到施展才华的舞台。',
        'view-team': '查看团队',

        // 页脚
        'footer-desc': '致力于探索人机交互与人工智能的前沿技术，创造更智能、更自然的人机交互体验。',
        'quick-links': '快速链接',
        'contact-info': '联系方式',
        'address': '北京市海淀区学院路XX号',
        'email': 'contact@hci-ai-lab.edu.cn',
        'phone': '+86 10-12345678',
        'newsletter': '订阅最新动态',
        'newsletter-desc': '订阅我们的通讯，获取实验室最新动态和研究成果。',
        'email-placeholder': '您的邮箱地址',
        'copyright': '© 2023 HCI-AI Lab. 保留所有权利。',
        
        // 语言切换
        'switch-lang': '切换语言',

        // 研究页面
        'research-page-title': '研究方向',
        'research-page-subtitle': '探索人机交互与人工智能的前沿领域',
        'research-overview-title': '研究领域概览',
        'research-overview-desc': '我们的研究涵盖人机交互与人工智能的多个前沿领域，致力于开发更智能、更自然的交互技术，推动人机协同的发展。',
        
        // 多模态交互
        'multimodal-title': '多模态交互',
        'multimodal-desc': '研究语音、手势、表情等多模态输入方式，开发自然、直观的人机交互系统。主要包括：',
        'multimodal-item-1': '多模态信号处理与融合',
        'multimodal-item-2': '情感计算与交互',
        'multimodal-item-3': '自然语言理解与生成',
        'multimodal-item-4': '手势识别与追踪',
        'multimodal-research-title': '多模态交互研究',
        'multimodal-research-desc': '我们致力于开发能够理解和响应人类自然交互方式的智能系统。通过整合语音、手势、面部表情等多种输入模态，创造更自然、更直观的人机交互体验。',
        
        // 智能界面
        'interface-title': '智能界面',
        'interface-desc': '设计和开发智能化的用户界面，提供个性化、自适应的交互体验。主要包括：',
        'interface-item-1': '自适应界面设计',
        'interface-item-2': '个性化推荐系统',
        'interface-item-3': '智能交互助手',
        'interface-item-4': '用户行为分析',
        'interface-research-title': '智能界面研究',
        'interface-research-desc': '探索新一代智能用户界面，通过机器学习和人工智能技术，为用户提供个性化、自适应的交互体验。',
        
        // 虚拟与增强现实
        'vr-ar-title': '虚拟与增强现实',
        'vr-ar-desc': '探索VR/AR技术在人机交互中的应用，创造沉浸式体验。主要包括：',
        'vr-ar-item-1': '3D交互技术',
        'vr-ar-item-2': '混合现实环境',
        'vr-ar-item-3': '空间定位与追踪',
        'vr-ar-item-4': '虚拟场景构建',
        'vr-ar-research-title': '虚拟与增强现实研究',
        'vr-ar-research-desc': '开发先进的VR/AR技术，创造身临其境的交互体验，探索虚拟和现实世界的无缝融合。',
        '3d-interaction-title': '3D交互',
        '3d-interaction-desc': '研究虚拟环境中的自然交互方式和技术。',
        'mixed-reality-title': '混合现实',
        'mixed-reality-desc': '探索虚拟内容与现实环境的自然融合。',

        // 具体技术
        'voice-interaction-title': '语音交互',
        'voice-interaction-desc': '开发智能语音识别和理解系统，支持自然语言对话。',
        'gesture-recognition-title': '手势识别',
        'gesture-recognition-desc': '研究手势追踪和识别技术，实现直观的空间交互。',
        'smart-recommendation-title': '智能推荐',
        'smart-recommendation-desc': '基于用户行为和偏好的个性化内容推荐系统。',
        'adaptive-interface-title': '自适应界面',
        'adaptive-interface-desc': '根据用户习惯和场景自动调整的智能界面系统。',

        // 研究项目
        'representative-projects': '代表性研究项目',
        'nsfc-grant': '国家自然科学基金',
        'industry-project': '企业合作项目',
        'project-1-title': '多模态情感计算与交互系统',
        'project-1-desc': '基于深度学习的多模态情感识别技术，实现智能人机情感交互，提升用户体验。',
        'project-1-period': '2022-2025',
        'project-2-title': '智能AR辅助系统',
        'project-2-desc': '开发基于AR技术的智能辅助系统，为工业生产和日常生活提供直观的信息展示和交互方式。',
        'project-2-period': '2023-2024',
        
        // 合作伙伴
        'partners': '合作伙伴',
        'partners-desc': '我们与国内外多家高校、研究机构和企业建立了长期的合作关系，共同推进人机交互技术的发展。',

        // 团队页面
        'team-page-title': '团队成员',
        'team-page-subtitle': '凝聚优秀人才，共创智能未来',
        'advisors-title': '指导教师',
        'graduate-team-title': '研究生团队',
        
        // 导师信息
        'prof-zhang-name': '张教授',
        'prof-zhang-title': '实验室主任',
        'prof-zhang-desc': '人机交互领域专家，主要研究方向包括多模态交互、情感计算和智能界面设计。在国际顶级期刊和会议发表论文50余篇。',
        
        'prof-li-name': '李教授',
        'prof-li-title': '副主任',
        'prof-li-desc': '人工智能与认知科学交叉领域专家，主要研究深度学习、计算机视觉和认知计算。主持多项国家级科研项目。',
        
        'prof-wang-name': '王教授',
        'prof-wang-title': '特聘研究员',
        'prof-wang-desc': '虚拟现实与增强现实领域专家，主要研究沉浸式交互技术和人机协同系统。曾获国家自然科学二等奖。',
        
        // 团队分类
        'team-filter-all': '全部',
        'team-filter-phd': '博士生',
        'team-filter-master': '硕士生',
        'team-filter-visitor': '访问学者',
        
        // 学生信息
        'student-zhang-name': '张同学',
        'student-zhang-title': '博士研究生',
        'student-zhang-research': '研究方向：多模态情感计算',
        
        'student-li-name': '李同学',
        'student-li-title': '博士研究生',
        'student-li-research': '研究方向：深度学习与视觉计算',
        
        'student-wang-name': '王同学',
        'student-wang-title': '硕士研究生',
        'student-wang-research': '研究方向：人机交互设计',
        
        'student-zhao-name': '赵同学',
        'student-zhao-title': '硕士研究生',
        'student-zhao-research': '研究方向：增强现实技术',
        
        // 加入我们
        'join-section-title': '加入我们',
        'join-section-desc': '我们正在寻找对人机交互和人工智能充满热情的优秀人才。如果您有兴趣加入我们的团队，请查看以下招生信息。',
        'graduate-admission-title': '研究生招生',
        'load-more': '加载更多',

        // 加入我们部分新增
        'postdoc-title': '博士后招收',
        'postdoc-desc': '常年招收博士后研究人员，提供具有竞争力的待遇和良好的科研环境。',
        'graduate-admission-desc': '每年招收博士生2-3名，硕士生4-5名。欢迎具有计算机、人工智能等相关背景的同学报考。',
        'contact-us-btn': '联系我们',
        
        // 底部菜单新增
        'lab-name': 'HCI-AI 实验室',
        'lab-footer-desc': '致力于探索人机交互与人工智能的前沿技术，创造更智能、更自然的人机交互体验。',
        'footer-links': '快速链接',
        'footer-contact': '联系方式',
        'footer-newsletter': '订阅最新动态',
        'footer-newsletter-desc': '订阅我们的通讯，获取实验室最新动态和研究成果。',
        'footer-email-placeholder': '您的邮箱地址',
        'footer-copyright': '© 2023 HCI-AI 实验室. 保留所有权利.',

        // 科研成果页面
        'publications-page-title': '科研成果',
        'publications-page-subtitle': '展示我们在人机交互与人工智能领域的最新研究成果',
        
        // 成果统计
        'papers-count': '论文发表',
        'patents-count': '专利授权',
        'projects-count': '科研项目',
        'tech-transfer-count': '技术转化',
        
        // 论文发表
        'publications-title': '论文发表',
        'filter-all': '全部',
        'filter-year': '{year}年',
        'paper-pdf': 'PDF',
        'paper-doi': 'DOI',
        'paper-code': '代码',
        'load-more': '加载更多',
        
        // 论文1
        'paper-1-title': '基于深度学习的多模态情感识别研究',
        'paper-1-authors': '张三, 李四, 王五',
        'paper-1-journal': 'IEEE Transactions on Human-Machine Systems',
        'paper-1-tag-1': 'SCI',
        'paper-1-tag-2': 'IF: 5.6',
        
        // 论文2
        'paper-2-title': '智能人机交互中的注意力机制研究',
        'paper-2-authors': '李四, 王五, 赵六',
        'paper-2-journal': 'ACM Conference on Human Factors in Computing Systems (CHI 2023)',
        'paper-2-tag-1': 'CCF-A',
        'paper-2-tag-2': '最佳论文',
        
        // 论文3
        'paper-3-title': 'AR环境下的自然手势交互技术研究',
        'paper-3-authors': '王五, 张三, 李四',
        'paper-3-journal': 'IEEE Virtual Reality Conference (VR 2022)',
        'paper-3-tag-1': 'CCF-A',
        
        // 专利与获奖
        'patents-awards-title': '专利与获奖',
        'patents-title': '发明专利',
        'patent-1-title': '一种基于深度学习的手势识别方法',
        'patent-1-number': '专利号：CN123456789A',
        'patent-1-inventors': '发明人：张三, 李四',
        'patent-status-granted': '已授权',
        
        // 专利2
        'patent-2-title': '一种智能人机交互系统及其实现方法',
        'patent-2-number': '专利号：CN987654321A',
        'patent-2-inventors': '发明人：王五, 赵六',
        
        // 获奖情况
        'awards-title': '获奖情况',
        'award-1-title': '国家科技进步二等奖',
        'award-1-desc': '智能人机交互关键技术及应用',
        'award-1-year': '2023年',
        'award-2-title': 'CCF科学技术创新奖',
        'award-2-desc': '多模态情感计算技术创新',
        'award-2-year': '2022年',
        
        // 技术转化
        'tech-transfer-title': '技术转化',
        'tech-transfer-subtitle': '我们致力于将研究成果转化为实际应用，为产业发展提供技术支持。',
        
        'transform-1-title': '智能交互系统',
        'transform-1-desc': '为某大型企业开发的智能人机交互系统，提高了生产效率30%。',
        'transform-1-year': '2023年',
        'transform-1-learn-more': '了解更多',
        
        'transform-2-title': 'AR导航系统',
        'transform-2-desc': '开发的AR导航系统已在多个商场和展馆成功部署。',
        'transform-2-year': '2022年',
        'transform-2-learn-more': '了解更多',
        
        'transform-3-title': '情感计算平台',
        'transform-3-desc': '研发的情感计算平台已服务超过100家企业客户。',
        'transform-3-year': '2022年',
        'transform-3-learn-more': '了解更多',

        // 联系我们页面
        'contact-page-title': '联系我们',
        'contact-page-subtitle': '欢迎与我们交流合作',
        
        // 联系信息卡片
        'lab-address-title': '实验室地址',
        'lab-address-info': '北京市海淀区学院路XX号<br>计算机科学与技术学院',
        'view-map': '查看地图',
        
        'contact-info-title': '联系方式',
        'contact-info-details': '电话：+86 10-12345678<br>邮箱：contact@hci-ai-lab.edu.cn',
        'send-email': '发送邮件',
        
        'social-media-title': '社交媒体',
        'follow-us': '关注我们',
        
        // 留言表单
        'contact-form-title': '留言咨询',
        'contact-form-desc': '如果您有任何问题或合作意向，请填写以下表单，我们会尽快与您联系。',
        'name-label': '姓名',
        'name-placeholder': '请输入您的姓名',
        'email-label': '邮箱',
        'email-placeholder': '请输入您的邮箱',
        'subject-label': '主题',
        'subject-placeholder': '请输入咨询主题',
        'message-label': '留言内容',
        'message-placeholder': '请输入您的留言内容',
        'submit-message': '提交留言',
        
        // 常见问题
        'faq-title': '常见问题',
        'faq-1-question': '如何申请加入实验室？',
        'faq-1-answer': '我们欢迎优秀的学生加入实验室。申请流程如下：',
        'faq-1-item-1': '准备个人简历和研究计划',
        'faq-1-item-2': '发送申请材料至实验室邮箱',
        'faq-1-item-3': '等待面试通知',
        'faq-1-item-4': '参加面试并等待结果',
        
        'faq-2-question': '实验室是否提供实习机会？',
        'faq-2-answer': '是的，我们定期招收实习生。实习生可以参与实验室的研究项目，获得实践经验。具体实习机会请关注实验室官网或社交媒体的通知。',
        
        'faq-3-question': '如何与实验室开展合作？',
        'faq-3-answer': '我们欢迎与企业、高校和研究机构开展合作。您可以通过以下方式与我们联系：',
        'faq-3-item-1': '发送合作意向邮件',
        'faq-3-item-2': '填写网站联系表单',
        'faq-3-item-3': '直接联系实验室负责人',
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-research': 'Research',
        'nav-team': 'Team',
        'nav-publications': 'Publications',
        'nav-contact': 'Contact',
        'language': 'Language',
        
        // Home
        'hero-title': 'Breaking Boundaries in HCI and AI',
        'hero-subtitle': 'We are dedicated to exploring cutting-edge technologies in Human-Computer Interaction and Artificial Intelligence, creating smarter and more natural interaction experiences.',
        'btn-learn-more': 'Learn More',
        'btn-contact': 'Contact Us',
        
        // Lab Overview
        'overview-title': 'Lab Overview',
        'intelligent-interaction-title': 'Intelligent Interaction',
        'intelligent-interaction-desc': 'Research on natural and intuitive human-computer interaction methods, enhancing user experience with AI technology.',
        'cognitive-computing-title': 'Cognitive Computing',
        'cognitive-computing-desc': 'Exploring the intersection of machine learning and cognitive science to build smarter computational models.',
        'ar-title': 'Augmented Reality',
        'ar-desc': 'Developing AR/VR technologies to create immersive interactive experiences and expand the boundaries of HCI.',
        'view-more': 'View More',

        // Research Highlights
        'highlights-title': 'Research Highlights',
        'highlight-1-title': 'Intelligent Interaction System',
        'highlight-1-desc': 'We have developed an intelligent interaction system based on multimodal input that can understand user\'s voice, gestures, and facial expressions, providing natural and smooth interaction experience.',
        'highlight-2-title': 'Cognitive Assistance Technology',
        'highlight-2-desc': 'We are developing cognitive assistance technology for special groups, providing personalized assistance suggestions through AI algorithms analyzing user behavior patterns.',
        'learn-more': 'Learn More',

        // Latest News
        'news-title': 'Latest News',
        'news-1-month': 'June',
        'news-1-day': '15',
        'news-1-title': 'Lab Paper Accepted by SIGCHI 2023',
        'news-1-desc': 'Our research paper "Deep Learning-Based Emotion Recognition Interaction System" has been accepted by SIGCHI 2023.',
        'news-2-month': 'May',
        'news-2-day': '28',
        'news-2-title': 'Lab Receives NSFC Grant',
        'news-2-desc': 'Our project "Research on Cognitive Computing in Multimodal Human-Computer Interaction" has received support from the National Natural Science Foundation of China.',
        'news-3-month': 'April',
        'news-3-day': '10',
        'news-3-title': 'Lab Establishes Industry-Academia Partnership',
        'news-3-desc': 'We have established partnerships with leading AI technology companies to promote the application of human-computer interaction technology.',
        'view-details': 'View Details',
        'more-news': 'View More News',

        // Join Us
        'join-us-title': 'Join Us',
        'join-us-desc': 'We always welcome talented individuals who are passionate about human-computer interaction and artificial intelligence. Whether you are a graduate student, doctoral student, or post-doctoral researcher, you can find a stage to showcase your talents here.',
        'view-team': 'View Team',

        // Footer
        'footer-desc': 'Dedicated to exploring cutting-edge technologies in human-computer interaction and artificial intelligence, creating smarter and more natural interaction experiences.',
        'quick-links': 'Quick Links',
        'contact-info': 'Contact Info',
        'address': 'XX Xueyuan Road, Haidian District, Beijing',
        'email': 'contact@hci-ai-lab.edu.cn',
        'phone': '+86 10-12345678',
        'newsletter': 'Newsletter',
        'newsletter-desc': 'Subscribe to our newsletter to receive the latest updates and research results from our lab.',
        'email-placeholder': 'Your email address',
        'copyright': '© 2023 HCI-AI Lab. All rights reserved.',
        
        // Language Switch
        'switch-lang': 'Switch Language',

        // Research Page
        'research-page-title': 'Research Areas',
        'research-page-subtitle': 'Exploring the Frontiers of HCI and AI',
        'research-overview-title': 'Research Overview',
        'research-overview-desc': 'Our research covers multiple cutting-edge areas in human-computer interaction and artificial intelligence, dedicated to developing smarter and more natural interaction technologies to advance human-computer collaboration.',
        
        // Multimodal Interaction
        'multimodal-title': 'Multimodal Interaction',
        'multimodal-desc': 'Research on multimodal input methods including voice, gesture, and expression, developing natural and intuitive human-computer interaction systems. Key areas include:',
        'multimodal-item-1': 'Multimodal Signal Processing and Fusion',
        'multimodal-item-2': 'Affective Computing and Interaction',
        'multimodal-item-3': 'Natural Language Understanding and Generation',
        'multimodal-item-4': 'Gesture Recognition and Tracking',
        'multimodal-research-title': 'Multimodal Interaction Research',
        'multimodal-research-desc': 'We are committed to developing intelligent systems that can understand and respond to natural human interaction methods. By integrating multiple input modalities such as voice, gesture, and facial expressions, we create more natural and intuitive human-computer interaction experiences.',
        
        // Intelligent Interface
        'interface-title': 'Intelligent Interface',
        'interface-desc': 'Design and development of intelligent user interfaces, providing personalized and adaptive interaction experiences. Key areas include:',
        'interface-item-1': 'Adaptive Interface Design',
        'interface-item-2': 'Personalized Recommendation Systems',
        'interface-item-3': 'Intelligent Interaction Assistants',
        'interface-item-4': 'User Behavior Analysis',
        'interface-research-title': 'Intelligent Interface Research',
        'interface-research-desc': 'Exploring next-generation intelligent user interfaces, providing personalized and adaptive interaction experiences through machine learning and artificial intelligence technologies.',
        
        // Virtual and Augmented Reality
        'vr-ar-title': 'Virtual and Augmented Reality',
        'vr-ar-desc': 'Exploring VR/AR technologies in human-computer interaction, creating immersive experiences. Key areas include:',
        'vr-ar-item-1': '3D Interaction Technology',
        'vr-ar-item-2': 'Mixed Reality Environment',
        'vr-ar-item-3': 'Spatial Positioning and Tracking',
        'vr-ar-item-4': 'Virtual Scene Construction',
        'vr-ar-research-title': 'Virtual and Augmented Reality Research',
        'vr-ar-research-desc': 'Developing advanced VR/AR technologies, creating immersive interaction experiences, and exploring seamless integration of virtual and real worlds.',
        '3d-interaction-title': '3D Interaction',
        '3d-interaction-desc': 'Researching natural interaction methods and technologies in virtual environments.',
        'mixed-reality-title': 'Mixed Reality',
        'mixed-reality-desc': 'Exploring natural integration of virtual content with real-world environments.',

        // Specific Technologies
        'voice-interaction-title': 'Voice Interaction',
        'voice-interaction-desc': 'Developing intelligent voice recognition and understanding systems, supporting natural language dialogue.',
        'gesture-recognition-title': 'Gesture Recognition',
        'gesture-recognition-desc': 'Researching gesture tracking and recognition technologies for intuitive spatial interaction.',
        'smart-recommendation-title': 'Smart Recommendation',
        'smart-recommendation-desc': 'Personalized content recommendation system based on user behavior and preferences.',
        'adaptive-interface-title': 'Adaptive Interface',
        'adaptive-interface-desc': 'Intelligent interface system that automatically adjusts based on user habits and scenarios.',

        // Research Projects
        'representative-projects': 'Representative Projects',
        'nsfc-grant': 'National Natural Science Foundation of China',
        'industry-project': 'Industry Collaboration Project',
        'project-1-title': 'Multimodal Affective Computing and Interaction System',
        'project-1-desc': 'Developing multimodal emotion recognition technology based on deep learning to achieve intelligent human-computer emotional interaction and enhance user experience.',
        'project-1-period': '2022-2025',
        'project-2-title': 'Intelligent AR Assistance System',
        'project-2-desc': 'Developing an intelligent assistance system based on AR technology to provide intuitive information display and interaction methods for industrial production and daily life.',
        'project-2-period': '2023-2024',
        
        // Partners
        'partners': 'Partners',
        'partners-desc': 'We have established long-term partnerships with universities, research institutions, and enterprises both domestically and internationally to jointly advance the development of human-computer interaction technology.',

        // Team Page
        'team-page-title': 'Our Team',
        'team-page-subtitle': 'Bringing Together Talents, Creating an Intelligent Future',
        'advisors-title': 'Faculty Advisors',
        'graduate-team-title': 'Graduate Students',
        
        // Faculty Information
        'prof-zhang-name': 'Prof. Zhang',
        'prof-zhang-title': 'Lab Director',
        'prof-zhang-desc': 'Expert in Human-Computer Interaction, focusing on multimodal interaction, affective computing, and intelligent interface design. Published over 50 papers in top international journals and conferences.',
        
        'prof-li-name': 'Prof. Li',
        'prof-li-title': 'Associate Director',
        'prof-li-desc': 'Expert in AI and Cognitive Science, specializing in deep learning, computer vision, and cognitive computing. Leading multiple national research projects.',
        
        'prof-wang-name': 'Prof. Wang',
        'prof-wang-title': 'Distinguished Researcher',
        'prof-wang-desc': 'Expert in Virtual and Augmented Reality, focusing on immersive interaction technology and human-computer collaboration systems. Recipient of the National Natural Science Award (Second Class).',
        
        // Team Categories
        'team-filter-all': 'All',
        'team-filter-phd': 'Ph.D. Students',
        'team-filter-master': 'Master Students',
        'team-filter-visitor': 'Visiting Scholars',
        
        // Student Information
        'student-zhang-name': 'Zhang',
        'student-zhang-title': 'Ph.D. Student',
        'student-zhang-research': 'Research: Multimodal Affective Computing',
        
        'student-li-name': 'Li',
        'student-li-title': 'Ph.D. Student',
        'student-li-research': 'Research: Deep Learning and Visual Computing',
        
        'student-wang-name': 'Wang',
        'student-wang-title': 'Master Student',
        'student-wang-research': 'Research: HCI Design',
        
        'student-zhao-name': 'Zhao',
        'student-zhao-title': 'Master Student',
        'student-zhao-research': 'Research: Augmented Reality Technology',
        
        // Join Us
        'join-section-title': 'Join Us',
        'join-section-desc': 'We are looking for talented individuals who are passionate about human-computer interaction and artificial intelligence. If you are interested in joining our team, please check the following admission information.',
        'graduate-admission-title': 'Graduate Admission',
        'load-more': 'Load More',

        // Join Us Section Additions
        'postdoc-title': 'Post-doctoral Recruitment',
        'postdoc-desc': 'We continuously recruit post-doctoral researchers, offering competitive benefits and an excellent research environment.',
        'graduate-admission-desc': 'We recruit 2-3 Ph.D. students and 4-5 Master students annually. Students with backgrounds in Computer Science, AI, and related fields are welcome to apply.',
        'view-details': 'View Details',
        'contact-us-btn': 'Contact Us',
        
        // Footer Menu Additions
        'lab-name': 'HCI-AI Laboratory',
        'lab-footer-desc': 'Dedicated to exploring cutting-edge technologies in human-computer interaction and artificial intelligence, creating smarter and more natural interaction experiences.',
        'footer-links': 'Quick Links',
        'footer-contact': 'Contact Information',
        'footer-newsletter': 'Newsletter',
        'footer-newsletter-desc': 'Subscribe to our newsletter to receive the latest updates and research results from our lab.',
        'footer-email-placeholder': 'Your email address',
        'footer-copyright': '© 2023 HCI-AI Lab. All rights reserved.',

        // Publications Page
        'publications-page-title': 'Publications',
        'publications-page-subtitle': 'Showcasing our latest research achievements in HCI and AI',
        
        // Statistics
        'papers-count': 'Papers Published',
        'patents-count': 'Patents Granted',
        'projects-count': 'Research Projects',
        'tech-transfer-count': 'Tech Transfers',
        
        // Publications
        'publications-title': 'Publications',
        'filter-all': 'All',
        'filter-year': '{year}',
        'paper-pdf': 'PDF',
        'paper-doi': 'DOI',
        'paper-code': 'Code',
        'load-more': 'Load More',
        
        // Paper 1
        'paper-1-title': 'Deep Learning-Based Multimodal Emotion Recognition Research',
        'paper-1-authors': 'Zhang San, Li Si, Wang Wu',
        'paper-1-journal': 'IEEE Transactions on Human-Machine Systems',
        'paper-1-tag-1': 'SCI',
        'paper-1-tag-2': 'IF: 5.6',
        
        // Paper 2
        'paper-2-title': 'Research on Attention Mechanism in Intelligent Human-Computer Interaction',
        'paper-2-authors': 'Li Si, Wang Wu, Zhao Liu',
        'paper-2-journal': 'ACM Conference on Human Factors in Computing Systems (CHI 2023)',
        'paper-2-tag-1': 'CCF-A',
        'paper-2-tag-2': 'Best Paper',
        
        // Paper 3
        'paper-3-title': 'Research on Natural Gesture Interaction Technology in AR Environment',
        'paper-3-authors': 'Wang Wu, Zhang San, Li Si',
        'paper-3-journal': 'IEEE Virtual Reality Conference (VR 2022)',
        'paper-3-tag-1': 'CCF-A',
        
        // Patents and Awards
        'patents-awards-title': 'Patents and Awards',
        'patents-title': 'Patents',
        'patent-1-title': 'A Deep Learning-Based Gesture Recognition Method',
        'patent-1-number': 'Patent No.: CN123456789A',
        'patent-1-inventors': 'Inventors: Zhang San, Li Si',
        'patent-status-granted': 'Granted',
        
        // Patent 2
        'patent-2-title': 'An Intelligent Human-Computer Interaction System and Its Implementation Method',
        'patent-2-number': 'Patent No.: CN987654321A',
        'patent-2-inventors': 'Inventors: Wang Wu, Zhao Liu',
        
        // Awards
        'awards-title': 'Awards',
        'award-1-title': 'National Science and Technology Progress Award (Second Class)',
        'award-1-desc': 'Key Technologies and Applications in Intelligent Human-Computer Interaction',
        'award-1-year': '2023',
        'award-2-title': 'CCF Science and Technology Innovation Award',
        'award-2-desc': 'Innovation in Multimodal Affective Computing Technology',
        'award-2-year': '2022',
        
        // Technology Transfer
        'tech-transfer-title': 'Technology Transfer',
        'tech-transfer-subtitle': 'We are committed to transforming research results into practical applications, providing technical support for industrial development.',
        
        'transform-1-title': 'Intelligent Interaction System',
        'transform-1-desc': 'Developed an intelligent HCI system for a large enterprise, improving production efficiency by 30%.',
        'transform-1-year': '2023',
        'transform-1-learn-more': 'Learn More',
        
        'transform-2-title': 'AR Navigation System',
        'transform-2-desc': 'The AR navigation system has been successfully deployed in multiple shopping malls and exhibition halls.',
        'transform-2-year': '2022',
        'transform-2-learn-more': 'Learn More',
        
        'transform-3-title': 'Affective Computing Platform',
        'transform-3-desc': 'The developed affective computing platform has served over 100 enterprise clients.',
        'transform-3-year': '2022',
        'transform-3-learn-more': 'Learn More',

        // Contact Us Page
        'contact-page-title': 'Contact Us',
        'contact-page-subtitle': 'Welcome to connect and collaborate with us',
        
        // Contact Information Cards
        'lab-address-title': 'Laboratory Address',
        'lab-address-info': 'XX Academy Road, Haidian District, Beijing<br>School of Computer Science and Technology',
        'view-map': 'View Map',
        
        'contact-info-title': 'Contact Information',
        'contact-info-details': 'Phone: +86 10-12345678<br>Email: contact@hci-ai-lab.edu.cn',
        'send-email': 'Send Email',
        
        'social-media-title': 'Social Media',
        'follow-us': 'Follow Us',
        
        // Contact Form
        'contact-form-title': 'Leave a Message',
        'contact-form-desc': 'If you have any questions or cooperation intentions, please fill out the form below, and we will contact you as soon as possible.',
        'name-label': 'Name',
        'name-placeholder': 'Please enter your name',
        'email-label': 'Email',
        'email-placeholder': 'Please enter your email',
        'subject-label': 'Subject',
        'subject-placeholder': 'Please enter your subject',
        'message-label': 'Message',
        'message-placeholder': 'Please enter your message',
        'submit-message': 'Submit Message',
        
        // FAQ
        'faq-title': 'Frequently Asked Questions',
        'faq-1-question': 'How to apply to join the laboratory?',
        'faq-1-answer': 'We welcome excellent students to join our laboratory. The application process is as follows:',
        'faq-1-item-1': 'Prepare your resume and research plan',
        'faq-1-item-2': 'Send application materials to the laboratory email',
        'faq-1-item-3': 'Wait for interview notification',
        'faq-1-item-4': 'Attend the interview and wait for results',
        
        'faq-2-question': 'Does the laboratory provide internship opportunities?',
        'faq-2-answer': 'Yes, we regularly recruit interns. Interns can participate in the laboratory\'s research projects and gain practical experience. Please pay attention to the announcements on the laboratory\'s official website or social media for specific internship opportunities.',
        
        'faq-3-question': 'How to collaborate with the laboratory?',
        'faq-3-answer': 'We welcome collaboration with enterprises, universities, and research institutions. You can contact us in the following ways:',
        'faq-3-item-1': 'Send a cooperation intention email',
        'faq-3-item-2': 'Fill out the contact form on the website',
        'faq-3-item-3': 'Contact the laboratory director directly',
    }
}; 