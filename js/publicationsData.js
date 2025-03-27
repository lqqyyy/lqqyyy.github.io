// 全局变量
let publicationsData = null;
let currentLang = 'zh'; // 默认语言
let paperPage = 1;
let patentPage = 1;
let awardPage = 1;
let transferPage = 1;
const itemsPerPage = 3; // 每页显示的条目数
let currentPaperType = 'all'; // 当前选中的论文类型
let currentYear = 'all'; // 当前选中的年份

// 初始化函数
function initPublicationsData() {
    try {
        // 直接使用内嵌数据而不是从文件加载
        publicationsData = {
          "papers": [
            {
              "id": 1,
              "title": "基于深度学习的多模态情感识别研究",
              "title_en": "Deep Learning-Based Multimodal Emotion Recognition Research",
              "authors": "张三, 李四, 王五",
              "authors_en": "Zhang San, Li Si, Wang Wu",
              "journal": "IEEE Transactions on Human-Machine Systems",
              "year": 2023,
              "type": "hcai",
              "tags": [
                {"text": "SCI", "text_en": "SCI"},
                {"text": "IF: 5.6", "text_en": "IF: 5.6"}
              ],
              "links": [
                {"type": "pdf", "url": "#"},
                {"type": "doi", "url": "#"},
                {"type": "code", "url": "#"}
              ]
            },
            {
              "id": 2,
              "title": "智能人机交互中的注意力机制研究",
              "title_en": "Research on Attention Mechanism in Intelligent Human-Computer Interaction",
              "authors": "李四, 王五, 赵六",
              "authors_en": "Li Si, Wang Wu, Zhao Liu",
              "journal": "ACM Conference on Human Factors in Computing Systems (CHI 2023)",
              "year": 2024,
              "type": "hcai",
              "tags": [
                {"text": "CCF-A", "text_en": "CCF-A"},
                {"text": "最佳论文", "text_en": "Best Paper"}
              ],
              "links": [
                {"type": "pdf", "url": "#"},
                {"type": "doi", "url": "#"},
                {"type": "code", "url": "#"}
              ]
            },
            {
              "id": 3,
              "title": "AR环境下的自然手势交互技术研究",
              "title_en": "Research on Natural Gesture Interaction Technology in AR Environment",
              "authors": "王五, 张三, 李四",
              "authors_en": "Wang Wu, Zhang San, Li Si",
              "journal": "IEEE Virtual Reality Conference (VR 2022)",
              "year": 2022,
              "type": "3d重建",
              "tags": [
                {"text": "CCF-A", "text_en": "CCF-A"}
              ],
              "links": [
                {"type": "pdf", "url": "#"},
                {"type": "doi", "url": "#"}
              ]
            },
            {
              "id": 4,
              "title": "基于深度强化学习的智能人机对话系统",
              "title_en": "Intelligent Human-Machine Dialogue System Based on Deep Reinforcement Learning",
              "authors": "赵六, 张三, 李四",
              "authors_en": "Zhao Liu, Zhang San, Li Si",
              "journal": "ACM Transactions on Interactive Intelligent Systems",
              "year": 2025,
              "type": "大模型",
              "tags": [
                {"text": "SCI", "text_en": "SCI"},
                {"text": "IF: 4.8", "text_en": "IF: 4.8"}
              ],
              "links": [
                {"type": "pdf", "url": "#"},
                {"type": "doi", "url": "#"},
                {"type": "code", "url": "#"}
              ]
            },
            {
              "id": 5,
              "title": "多模态数据融合的情感计算方法",
              "title_en": "Affective Computing Method Based on Multimodal Data Fusion",
              "authors": "张三, 王五, 钱七",
              "authors_en": "Zhang San, Wang Wu, Qian Qi",
              "journal": "IEEE Transactions on Affective Computing",
              "year": 2021,
              "type": "nlp",
              "tags": [
                {"text": "SCI", "text_en": "SCI"},
                {"text": "IF: 6.2", "text_en": "IF: 6.2"}
              ],
              "links": [
                {"type": "pdf", "url": "#"},
                {"type": "doi", "url": "#"}
              ]
            },
            {
              "id": 6,
              "title": "大型软件系统架构设计与优化",
              "title_en": "Large-Scale Software System Architecture Design and Optimization",
              "authors": "李四, 张三, 赵六",
              "authors_en": "Li Si, Zhang San, Zhao Liu",
              "journal": "IEEE Transactions on Software Engineering",
              "year": 2022,
              "type": "软件工程",
              "tags": [
                {"text": "SCI", "text_en": "SCI"},
                {"text": "IF: 5.8", "text_en": "IF: 5.8"}
              ],
              "links": [
                {"type": "pdf", "url": "#"},
                {"type": "doi", "url": "#"}
              ]
            },
            {
              "id": 7,
              "title": "自然语言处理在人机交互中的应用研究",
              "title_en": "Research on Natural Language Processing Applications in HCI",
              "authors": "王五, 张三, 钱七",
              "authors_en": "Wang Wu, Zhang San, Qian Qi",
              "journal": "ACM Transactions on Computer-Human Interaction",
              "year": 2023,
              "type": "nlp",
              "tags": [
                {"text": "CCF-A", "text_en": "CCF-A"}
              ],
              "links": [
                {"type": "pdf", "url": "#"},
                {"type": "doi", "url": "#"},
                {"type": "code", "url": "#"}
              ]
            },
            {
              "id": 8,
              "title": "室内场景的三维重建与语义分割",
              "title_en": "3D Reconstruction and Semantic Segmentation of Indoor Scenes",
              "authors": "赵六, 王五, 李四",
              "authors_en": "Zhao Liu, Wang Wu, Li Si",
              "journal": "IEEE Conference on Computer Vision and Pattern Recognition (CVPR 2024)",
              "year": 2024,
              "type": "3d重建",
              "tags": [
                {"text": "CCF-A", "text_en": "CCF-A"}
              ],
              "links": [
                {"type": "pdf", "url": "#"},
                {"type": "doi", "url": "#"},
                {"type": "code", "url": "#"}
              ]
            }
          ],
          "patents": [
            {
              "id": 1,
              "title": "一种基于深度学习的手势识别方法",
              "title_en": "A Deep Learning-Based Gesture Recognition Method",
              "number": "CN123456789A",
              "inventors": "张三, 李四",
              "inventors_en": "Zhang San, Li Si",
              "status": "已授权",
              "status_en": "Granted",
              "year": 2022
            },
            {
              "id": 2,
              "title": "一种智能人机交互系统及其实现方法",
              "title_en": "An Intelligent Human-Computer Interaction System and Its Implementation Method",
              "number": "CN987654321A",
              "inventors": "王五, 赵六",
              "inventors_en": "Wang Wu, Zhao Liu",
              "status": "已授权",
              "status_en": "Granted",
              "year": 2022
            },
            {
              "id": 3,
              "title": "基于多模态信息的情感识别方法",
              "title_en": "Emotion Recognition Method Based on Multimodal Information",
              "number": "CN123459876A",
              "inventors": "李四, 王五, 张三",
              "inventors_en": "Li Si, Wang Wu, Zhang San",
              "status": "已授权",
              "status_en": "Granted",
              "year": 2021
            }
          ],
          "awards": [
            {
              "id": 1,
              "title": "国家科技进步二等奖",
              "title_en": "National Science and Technology Progress Award (Second Class)",
              "description": "智能人机交互关键技术及应用",
              "description_en": "Key Technologies and Applications in Intelligent Human-Computer Interaction",
              "year": "2023年",
              "year_en": "2023"
            },
            {
              "id": 2,
              "title": "CCF科学技术创新奖",
              "title_en": "CCF Science and Technology Innovation Award",
              "description": "多模态情感计算技术创新",
              "description_en": "Innovation in Multimodal Affective Computing Technology",
              "year": "2022年",
              "year_en": "2022"
            },
            {
              "id": 3,
              "title": "国际人机交互学会青年科学家奖",
              "title_en": "Young Scientist Award of International HCI Society",
              "description": "在人机交互领域的杰出贡献",
              "description_en": "Outstanding Contribution in Human-Computer Interaction Field",
              "year": "2021年",
              "year_en": "2021"
            }
          ],
          "transfers": [
            {
              "id": 1,
              "title": "智能交互系统",
              "title_en": "Intelligent Interaction System",
              "description": "为某大型企业开发的智能人机交互系统，提高了生产效率30%。",
              "description_en": "Developed an intelligent HCI system for a large enterprise, improving production efficiency by 30%.",
              "year": "2023年",
              "year_en": "2023",
              "image": "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
              "id": 2,
              "title": "AR导航系统",
              "title_en": "AR Navigation System",
              "description": "开发的AR导航系统已在多个商场和展馆成功部署。",
              "description_en": "The AR navigation system has been successfully deployed in multiple shopping malls and exhibition halls.",
              "year": "2022年",
              "year_en": "2022",
              "image": "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
              "id": 3,
              "title": "情感计算平台",
              "title_en": "Affective Computing Platform",
              "description": "研发的情感计算平台已服务超过100家企业客户。",
              "description_en": "The developed affective computing platform has served over 100 enterprise clients.",
              "year": "2022年",
              "year_en": "2022",
              "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
          ]
        };
        
        // 初始渲染
        renderAllSections();
        
        // 设置加载更多按钮的点击事件
        setupLoadMoreButtons();
        
        // 设置年份筛选器
        setupYearFilters();
        
        // 设置论文类型筛选器
        setupTypeFilters();
        
        // 监听语言切换
        document.addEventListener('languageChanged', (e) => {
            currentLang = e.detail.language;
            renderAllSections();
        });
    } catch (error) {
        console.error('加载出版物数据失败:', error);
    }
}

// 设置加载更多按钮
function setupLoadMoreButtons() {
    document.getElementById('load-more-papers').addEventListener('click', () => {
        paperPage++;
        renderPapers();
    });
    
    document.getElementById('load-more-patents').addEventListener('click', () => {
        patentPage++;
        renderPatents();
    });
    
    document.getElementById('load-more-awards').addEventListener('click', () => {
        awardPage++;
        renderAwards();
    });
    
    document.getElementById('load-more-transfers').addEventListener('click', () => {
        transferPage++;
        renderTransfers();
    });
}

// 设置年份筛选器
function setupYearFilters() {
    const yearFilters = document.querySelectorAll('.year-filter-btn');
    yearFilters.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的active类
            yearFilters.forEach(btn => btn.classList.remove('active'));
            // 为当前按钮添加active类
            this.classList.add('active');
            
            // 重置分页并重新渲染
            paperPage = 1;
            const yearValue = this.getAttribute('data-year');
            currentYear = yearValue;
            renderPapers();
        });
    });
}

// 设置论文类型筛选器
function setupTypeFilters() {
    const typeFilters = document.querySelectorAll('.type-filter-btn');
    typeFilters.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的active类
            typeFilters.forEach(btn => btn.classList.remove('active'));
            // 为当前按钮添加active类
            this.classList.add('active');
            
            // 重置分页并重新渲染
            paperPage = 1;
            const typeValue = this.getAttribute('data-type');
            currentPaperType = typeValue;
            renderPapers();
        });
    });
}

// 渲染所有部分
function renderAllSections() {
    paperPage = 1;
    patentPage = 1;
    awardPage = 1;
    transferPage = 1;
    
    renderPapers();
    renderPatents();
    renderAwards();
    renderTransfers();
}

// 渲染论文部分
function renderPapers() {
    if (!publicationsData) return;
    
    const papersList = document.getElementById('papers-list');
    let papers = [...publicationsData.papers];
    
    // 根据类型筛选
    if (currentPaperType !== 'all') {
        papers = papers.filter(paper => paper.type === currentPaperType);
    }
    
    // 根据年份筛选
    if (currentYear !== 'all') {
        if (currentYear === 'earlier') {
            // 显示2022年及以前的论文
            papers = papers.filter(paper => paper.year <= 2022);
        } else {
            // 显示特定年份的论文
            const year = parseInt(currentYear);
            papers = papers.filter(paper => paper.year === year);
        }
    }
    
    // 按年份降序排序
    papers.sort((a, b) => b.year - a.year);
    
    // 计算当前页应显示的论文
    const startIndex = 0;
    const endIndex = paperPage * itemsPerPage;
    const displayedPapers = papers.slice(startIndex, endIndex);
    
    // 清空列表并重新渲染
    papersList.innerHTML = '';
    
    if (displayedPapers.length === 0) {
        papersList.innerHTML = `<div class="text-center text-gray-500 py-8">${currentLang === 'zh' ? '没有找到符合条件的论文' : 'No papers found matching your criteria'}</div>`;
    } else {
        // 渲染论文
        displayedPapers.forEach(paper => {
            const paperHTML = createPaperHTML(paper);
            papersList.innerHTML += paperHTML;
        });
    }
    
    // 控制"加载更多"按钮的显示
    const loadMoreButton = document.getElementById('load-more-papers');
    if (papers.length <= endIndex) {
        loadMoreButton.style.display = 'none';
    } else {
        loadMoreButton.style.display = 'inline-flex';
    }
}

// 创建论文HTML
function createPaperHTML(paper) {
    const title = currentLang === 'zh' ? paper.title : paper.title_en;
    const authors = currentLang === 'zh' ? paper.authors : paper.authors_en;
    
    // 创建标签HTML
    let tagsHTML = '';
    paper.tags.forEach(tag => {
        const tagText = currentLang === 'zh' ? tag.text : tag.text_en;
        tagsHTML += `<span class="publication-tag">${tagText}</span>`;
    });
    
    // 创建链接HTML
    let linksHTML = '';
    paper.links.forEach(link => {
        const linkText = link.type.toUpperCase();
        const i18nKey = `paper-${link.type}`;
        linksHTML += `
            <a href="${link.url}" class="publication-link">
                <i class="fas fa-${link.type === 'pdf' ? 'file-pdf' : link.type === 'doi' ? 'link' : 'code'}"></i>
                <span data-i18n="${i18nKey}">${linkText}</span>
            </a>
        `;
    });
    
    return `
        <div class="publication-card">
            <div class="publication-year">${paper.year}</div>
            <div class="publication-content">
                <h3 class="publication-title">${title}</h3>
                <p class="publication-authors">${authors}</p>
                <p class="publication-journal">${paper.journal}</p>
                <div class="publication-tags">
                    ${tagsHTML}
                </div>
                <div class="publication-links">
                    ${linksHTML}
                </div>
            </div>
        </div>
    `;
}

// 渲染专利部分
function renderPatents() {
    if (!publicationsData) return;
    
    const patentsList = document.getElementById('patents-list');
    let patents = [...publicationsData.patents];
    
    // 按年份降序排序
    patents.sort((a, b) => b.year - a.year);
    
    // 计算当前页应显示的专利
    const startIndex = 0;
    const endIndex = patentPage * itemsPerPage;
    const displayedPatents = patents.slice(startIndex, endIndex);
    
    // 清空列表并重新渲染
    patentsList.innerHTML = '';
    
    // 渲染专利
    displayedPatents.forEach(patent => {
        const patentHTML = createPatentHTML(patent);
        patentsList.innerHTML += patentHTML;
    });
    
    // 控制"加载更多"按钮的显示
    const loadMoreButton = document.getElementById('load-more-patents');
    if (patents.length <= endIndex) {
        loadMoreButton.style.display = 'none';
    } else {
        loadMoreButton.style.display = 'inline-flex';
    }
}

// 创建专利HTML
function createPatentHTML(patent) {
    const title = currentLang === 'zh' ? patent.title : patent.title_en;
    const inventors = currentLang === 'zh' ? patent.inventors : patent.inventors_en;
    const status = currentLang === 'zh' ? patent.status : patent.status_en;
    
    return `
        <div class="patent-card">
            <div class="patent-icon">
                <i class="fas fa-lightbulb"></i>
            </div>
            <div class="patent-content">
                <h4 class="patent-title">${title}</h4>
                <p class="patent-info">专利号：${patent.number}</p>
                <p class="patent-authors">发明人：${inventors}</p>
                <span class="patent-status">${status}</span>
            </div>
        </div>
    `;
}

// 渲染奖项部分
function renderAwards() {
    if (!publicationsData) return;
    
    const awardsList = document.getElementById('awards-list');
    let awards = [...publicationsData.awards];
    
    // 计算当前页应显示的奖项
    const startIndex = 0;
    const endIndex = awardPage * itemsPerPage;
    const displayedAwards = awards.slice(startIndex, endIndex);
    
    // 清空列表并重新渲染
    awardsList.innerHTML = '';
    
    // 渲染奖项
    displayedAwards.forEach(award => {
        const awardHTML = createAwardHTML(award);
        awardsList.innerHTML += awardHTML;
    });
    
    // 控制"加载更多"按钮的显示
    const loadMoreButton = document.getElementById('load-more-awards');
    if (awards.length <= endIndex) {
        loadMoreButton.style.display = 'none';
    } else {
        loadMoreButton.style.display = 'inline-flex';
    }
}

// 创建奖项HTML
function createAwardHTML(award) {
    const title = currentLang === 'zh' ? award.title : award.title_en;
    const description = currentLang === 'zh' ? award.description : award.description_en;
    const year = currentLang === 'zh' ? award.year : award.year_en;
    
    return `
        <div class="award-card">
            <div class="award-icon">
                <i class="fas fa-trophy"></i>
            </div>
            <div class="award-content">
                <h4 class="award-title">${title}</h4>
                <p class="award-desc">${description}</p>
                <p class="award-year">${year}</p>
            </div>
        </div>
    `;
}

// 渲染技术转化部分
function renderTransfers() {
    if (!publicationsData) return;
    
    const transfersList = document.getElementById('transfers-list');
    let transfers = [...publicationsData.transfers];
    
    // 计算当前页应显示的转化项目
    const startIndex = 0;
    const endIndex = transferPage * itemsPerPage;
    const displayedTransfers = transfers.slice(startIndex, endIndex);
    
    // 清空列表并重新渲染
    transfersList.innerHTML = '';
    
    // 渲染转化项目
    displayedTransfers.forEach(transfer => {
        const transferHTML = createTransferHTML(transfer);
        transfersList.innerHTML += transferHTML;
    });
    
    // 控制"加载更多"按钮的显示
    const loadMoreButton = document.getElementById('load-more-transfers');
    if (transfers.length <= endIndex) {
        loadMoreButton.style.display = 'none';
    } else {
        loadMoreButton.style.display = 'inline-flex';
    }
}

// 创建技术转化HTML
function createTransferHTML(transfer) {
    const title = currentLang === 'zh' ? transfer.title : transfer.title_en;
    const description = currentLang === 'zh' ? transfer.description : transfer.description_en;
    const year = currentLang === 'zh' ? transfer.year : transfer.year_en;
    const learnMore = currentLang === 'zh' ? '了解更多 →' : 'Learn More →';
    
    return `
        <div class="transform-card">
            <div class="transform-image">
                <img src="${transfer.image}" alt="${title}" class="w-full h-48 object-cover rounded-t-lg">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${title}</h3>
                <p class="text-gray-600 mb-4">${description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-500">${year}</span>
                    <a href="#" class="text-blue-500 hover:text-blue-600">${learnMore}</a>
                </div>
            </div>
        </div>
    `;
}

// 当页面加载完成时初始化
document.addEventListener('DOMContentLoaded', initPublicationsData); 