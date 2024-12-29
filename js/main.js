// 获取DOM元素
const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.getElementById('overlay');
const body = document.body;

// 打开侧边栏
menuBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    body.classList.add('sidebar-open');
});

// 关闭侧边栏
function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('sidebar-open');
}

// 点击关闭按钮关闭侧边栏
closeBtn.addEventListener('click', closeSidebar);

// 点击遮罩层关闭侧边栏
overlay.addEventListener('click', closeSidebar);

// ESC键关闭侧边栏
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        closeSidebar();
    }
});

// 标签页切换功能
document.addEventListener('DOMContentLoaded', () => {
    const categoryLinks = document.querySelectorAll('.category-nav a');
    const productCards = document.querySelectorAll('.product-card');

    // 处理标签点击
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // 移除所有active类
            categoryLinks.forEach(l => l.parentElement.classList.remove('active'));
            
            // 添加active类到当前点击的标签
            e.target.parentElement.classList.add('active');
            
            const category = e.target.getAttribute('href').replace('#', '');
            
            // 显示/隐藏相应的产品
            productCards.forEach(card => {
                const cardCategories = card.dataset.category.split(' ');
                
                if (category === 'all') {
                    // 显示所有产品，添加淡入动画
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 10);
                } else if (cardCategories.includes(category.toLowerCase())) {
                    // 显示匹配的产品
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    // 隐藏不匹配的产品
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });
}); 