/**
 * RFCE - Senior Living Community JavaScript
 * Enhanced with semantic image matching and animations
 */

const RFCEApp = {
  // Semantic Image Service with project-specific images
  IMAGE_MAP: {
    'community-life': [
      'https://communityandcare.com.au/wp-content/uploads/2020/11/community-and-care-group-center-activity.jpg',
      'https://www.blog.oxitone.com/wp-content/uploads/2021/08/improving-quality-of-care-in-nursing-homes.jpg',
      'https://assistedlivingeducation.com/wp-content/uploads/2025/04/wellness-Leonardo_Kino_XL_A_vividly_thriving_group_of_elderly_residents_0.jpg'
    ],
    'dining': [
      'https://assistedlivingeducation.com/wp-content/uploads/2018/03/AdobeStock_175564448-1030x687.jpeg',
      'https://tse2.mm.bing.net/th/id/OIP.8FikOlX9boXVBOktdZoPhQHaHa?r=0&pid=ImgDet&w=198&h=198&c=7&o=7&rm=3'
    ],
    'wellness': [
      'https://assistedlivingeducation.com/wp-content/uploads/2025/04/wellness-Leonardo_Kino_XL_A_vividly_thriving_group_of_elderly_residents_0.jpg',
      'https://tse3.mm.bing.net/th/id/OIP.LlMGZhlTdbqusNaiKtPljgHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
    ],
    'residences': [
      'https://tse3.mm.bing.net/th/id/OIP.LlMGZhlTdbqusNaiKtPljgHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      'https://assistedlivingeducation.com/wp-content/uploads/2018/03/AdobeStock_175564448-1030x687.jpeg'
    ],
    'nature': [
      'https://tse3.mm.bing.net/th/id/OIP.LlMGZhlTdbqusNaiKtPljgHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      'https://communityandcare.com.au/wp-content/uploads/2020/11/community-and-care-group-center-activity.jpg'
    ],
    'team': [
      'https://www.blog.oxitone.com/wp-content/uploads/2021/08/improving-quality-of-care-in-nursing-homes.jpg',
      'https://assistedlivingeducation.com/wp-content/uploads/2025/04/wellness-Leonardo_Kino_XL_A_vividly_thriving_group_of_elderly_residents_0.jpg'
    ]
  },
  // Enhanced gallery data with project-specific images
  galleryImages: [
    { id: 1, src: 'https://assistedlivingeducation.com/wp-content/uploads/2018/03/AdobeStock_175564448-1030x687.jpeg', alt: 'Elegant community dining room with seniors enjoying meals together', tags: ['dining', 'people'], topic: 'dining' },
    { id: 2, src: 'https://tse3.mm.bing.net/th/id/OIP.LlMGZhlTdbqusNaiKtPljgHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3', alt: 'Beautiful garden courtyard with walking paths and peaceful seating', tags: ['places', 'wellness'], topic: 'nature' },
    { id: 3, src: 'https://tse2.mm.bing.net/th/id/OIP.8FikOlX9boXVBOktdZoPhQHaHa?r=0&pid=ImgDet&w=198&h=198&c=7&o=7&rm=3', alt: 'Modern senior living apartment with comfortable furnishings', tags: ['places'], topic: 'residences' },
    { id: 5, src: 'https://communityandcare.com.au/wp-content/uploads/2020/11/community-and-care-group-center-activity.jpg', alt: 'Comfortable common area with fireplace and social spaces', tags: ['places'], topic: 'community-life' },
    { id: 6, src: 'https://www.blog.oxitone.com/wp-content/uploads/2021/08/improving-quality-of-care-in-nursing-homes.jpg', alt: 'Professional staff providing quality care and support', tags: ['people'], topic: 'team' },
    { id: 7, src: 'https://assistedlivingeducation.com/wp-content/uploads/2025/04/wellness-Leonardo_Kino_XL_A_vividly_thriving_group_of_elderly_residents_0.jpg', alt: 'Residents enjoying social activities and community events', tags: ['people'], topic: 'community-life' },
    { id: 8, src: 'https://tse3.mm.bing.net/th/id/OIP.LlMGZhlTdbqusNaiKtPljgHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3', alt: 'Peaceful library with comfortable reading chairs and natural light', tags: ['places'], topic: 'residences' },
    { id: 9, src: 'https://assistedlivingeducation.com/wp-content/uploads/2025/04/wellness-Leonardo_Kino_XL_A_vividly_thriving_group_of_elderly_residents_0.jpg', alt: 'Wellness center with modern exercise equipment and programs', tags: ['wellness'], topic: 'wellness' },
    { id: 10, src: 'https://communityandcare.com.au/wp-content/uploads/2020/11/community-and-care-group-center-activity.jpg', alt: 'Outdoor terrace with beautiful views and fresh air', tags: ['places'], topic: 'nature' },
    { id: 11, src: 'https://www.blog.oxitone.com/wp-content/uploads/2021/08/improving-quality-of-care-in-nursing-homes.jpg', alt: 'Community event space for gatherings and celebrations', tags: ['people', 'places'], topic: 'community-life' },
    { id: 12, src: 'https://assistedlivingeducation.com/wp-content/uploads/2025/04/wellness-Leonardo_Kino_XL_A_vividly_thriving_group_of_elderly_residents_0.jpg', alt: 'Spa and wellness facilities for relaxation and health', tags: ['wellness'], topic: 'wellness' }
  ],

  blogPosts: [
    {
      id: 1, title: 'The Benefits of Active Senior Living', 
      excerpt: 'Discover how staying active improves physical and mental well-being.',
      image: 'https://assistedlivingeducation.com/wp-content/uploads/2025/04/wellness-Leonardo_Kino_XL_A_vividly_thriving_group_of_elderly_residents_0.jpg',
      date: '2024-03-15', tags: ['wellness', 'lifestyle'],
      content: '<h2>Embracing Active Living</h2><p>Active senior living enhances independence, builds connections, and improves quality of life. Regular physical activity maintains strength, balance, and flexibility while reducing fall risks.</p><h3>Physical Benefits</h3><ul><li>Improved cardiovascular health</li><li>Better balance and coordination</li><li>Increased bone density</li><li>Enhanced mood and mental clarity</li></ul><p>At RFCE, we provide diverse opportunities for residents to stay active and engaged.</p>'
    },
    {
      id: 2, title: 'Creating a Welcoming Community',
      excerpt: 'Key elements that make senior living feel like home.',
      image: 'https://www.blog.oxitone.com/wp-content/uploads/2021/08/improving-quality-of-care-in-nursing-homes.jpg',
      date: '2024-03-10', tags: ['community', 'lifestyle'],
      content: '<h2>What Makes Home</h2><p>Creating welcoming environments requires thoughtful design, caring staff, and celebrating each resident\'s unique story.</p><h3>Design for Comfort</h3><p>Well-lit walkways, comfortable common areas, and accessible features create a sense of home.</p><p>Community events and lifelong learning opportunities foster true belonging.</p>'
    },
    {
      id: 3, title: 'Nutrition and Wellness',
      excerpt: 'How proper nutrition enhances quality of life.',
      image: 'https://assistedlivingeducation.com/wp-content/uploads/2018/03/AdobeStock_175564448-1030x687.jpeg',
      date: '2024-03-05', tags: ['wellness', 'nutrition'],
      content: '<h2>Healthy Aging Foundation</h2><p>Proper nutrition is fundamental to healthy aging. Our culinary team sources fresh, local ingredients for nutritious and delicious meals.</p><ul><li>Heart-healthy options</li><li>Diabetic-friendly choices</li><li>Cultural cuisine</li></ul>'
    },
    {
      id: 4, title: 'Technology and Modern Living',
      excerpt: 'How technology enhances safety and communication.',
      image: 'https://tse2.mm.bing.net/th/id/OIP.8FikOlX9boXVBOktdZoPhQHaHa?r=0&pid=ImgDet&w=198&h=198&c=7&o=7&rm=3',
      date: '2024-02-28', tags: ['technology', 'safety'],
      content: '<h2>Embracing Innovation</h2><p>Modern communities embrace technology for enhanced safety, communication, and quality of life.</p><h3>Safety Systems</h3><p>Advanced security and health monitoring provide peace of mind while maintaining independence.</p>'
    },
    {
      id: 5, title: 'Lifelong Learning',
      excerpt: 'Continued education benefits seniors.',
      image: 'https://tse3.mm.bing.net/th/id/OIP.LlMGZhlTdbqusNaiKtPljgHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      date: '2024-02-20', tags: ['education', 'lifestyle'],
      content: '<h2>Never Stop Learning</h2><p>Lifelong learning maintains cognitive function and provides purpose. Our community offers lectures, book clubs, and creative workshops.</p><blockquote>"Learning is a lifelong journey that enriches every stage."</blockquote>'
    },
    {
      id: 6, title: 'Family Involvement',
      excerpt: 'How families stay connected in senior living.',
      image: 'https://communityandcare.com.au/wp-content/uploads/2020/11/community-and-care-group-center-activity.jpg',
      date: '2024-02-15', tags: ['family', 'community'],
      content: '<h2>Strengthening Bonds</h2><p>Family involvement is essential. We encourage participation through regular communication, family events, and virtual visits.</p><p>Strong family connections contribute to residents\' happiness and well-being.</p>'
    }
  ],

  currentImageIndex: 0,
  currentImages: [],

  // About Carousel State
  aboutCarousel: {
    currentIndex: 0,
    images: [],
    autoSlideTimer: null,
    isUserInteracting: false
  },

  // Initialize
  init() {
    this.initTheme();
    this.initNavigation();
    this.initReveal();
    this.initParallaxHero();
    this.initImageErrors();
    this.applySemanticImages();
    this.initTourScheduler();
    this.initAboutCarousel();
    
    const path = window.location.pathname;
    if (path.includes('gallery')) { this.initGallery(); this.initLightbox(); }
    else if (path.includes('blog')) { this.initBlog(); this.initModal(); this.initLightbox(); }
    else if (path.includes('contact')) { this.initContact(); }
    else { this.initHome(); }
    
    // Auto-open tour modal if URL has #tour
    if (window.location.hash === '#tour') {
      this.openTourModal();
    }
  },

  // Semantic Image Service
  pickImage(topic, keywords = []) {
    const images = this.IMAGE_MAP[topic] || this.IMAGE_MAP['community-life'];
    const selectedUrl = images[Math.floor(Math.random() * images.length)];
    
    const altText = keywords.length > 0 
      ? `${keywords.slice(0, 3).join(', ')} at RFCE senior living community`
      : `Beautiful ${topic.replace('-', ' ')} at RFCE senior living community`;
    
    const caption = keywords.length > 0
      ? keywords.slice(0, 2).join(' and ')
      : topic.replace('-', ' ');
    
    return { url: selectedUrl, alt: altText, caption };
  },

  extractKeywords(text) {
    const words = text.toLowerCase()
      .replace(/[^a-z\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 3)
      .filter(word => !['this', 'that', 'with', 'from', 'they', 'have', 'will', 'been', 'were', 'their', 'there', 'would', 'could', 'should'].includes(word));
    
    return [...new Set(words)].slice(0, 7);
  },

  applySemanticImages() {
    document.querySelectorAll('[data-topic]').forEach(section => {
      const topic = section.dataset.topic;
      const copyElement = section.querySelector('.copy');
      const imgElement = section.querySelector('.paired-img');
      const captionElement = section.querySelector('.caption');
      
      if (copyElement && imgElement) {
        const keywords = this.extractKeywords(copyElement.textContent);
        const { url, alt, caption } = this.pickImage(topic, keywords);
        
        imgElement.src = url;
        imgElement.alt = alt;
        if (captionElement) {
          captionElement.textContent = caption;
        }
      }
    });
  },

  // Enhanced scroll reveal with stagger
  initReveal() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 100);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  },

  // Parallax hero (disabled for reduced motion)
  initParallaxHero() {
    const hero = document.querySelector('.hero');
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    let ticking = false;
    
    const updateParallax = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.03;
      const maxOffset = 12;
      const offset = Math.max(-maxOffset, Math.min(maxOffset, rate));
      
      hero.style.transform = `translateY(${offset}px)`;
      ticking = false;
    };
    
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', requestTick, { passive: true });
  },

  // Theme
  initTheme() {
    const saved = localStorage.getItem('rfce-theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('rfce-theme', next);
      });
    }
  },

  // Navigation
  initNavigation() {
    const path = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (path.includes(href) || (path === '/' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  },

  // Legacy scroll reveal (replaced by initReveal)
  // This method is kept for any remaining references
  initScrollReveal() {
    this.initReveal();
  },

  // Image error handling
  initImageErrors() {
    document.addEventListener('error', e => {
      if (e.target.tagName === 'IMG') {
        // Use one of our project images as fallback
        e.target.src = 'https://communityandcare.com.au/wp-content/uploads/2020/11/community-and-care-group-center-activity.jpg';
      }
    }, true);
  },

  // Home page
  initHome() {
    this.renderLifestyle();
    this.renderBlogPreview();
  },

  renderLifestyle() {
    const container = document.querySelector('.lifestyle-grid');
    if (!container) return;

    container.innerHTML = this.galleryImages.slice(0, 5).map(img => `
      <div class="lifestyle-item reveal-stagger">
        <img src="${img.src}" alt="${img.alt}" loading="lazy" onerror="this.src='./assets/img/fallback.jpg'">
        <div class="lifestyle-overlay">${img.alt.split(' ').slice(0, 3).join(' ')}</div>
      </div>
    `).join('');

    container.addEventListener('click', () => window.location.href = './gallery.html');
  },

  renderBlogPreview() {
    const container = document.querySelector('.blog-grid');
    if (!container) return;

    container.innerHTML = this.blogPosts.slice(0, 3).map(post => `
      <article class="blog-card reveal-stagger">
        <div class="blog-image">
          <img src="${post.image}" alt="${post.title}" loading="lazy" onerror="this.src='./assets/img/fallback.jpg'">
        </div>
        <div class="blog-content">
          <div class="blog-meta">
            <time>${this.formatDate(post.date)}</time>
            ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
          </div>
          <h3 class="blog-title">${post.title}</h3>
          <p>${post.excerpt}</p>
        </div>
      </article>
    `).join('');

    container.addEventListener('click', () => window.location.href = './blog.html');
  },

  // Gallery
  initGallery() {
    const container = document.querySelector('.gallery-grid');
    if (!container) return;

    container.innerHTML = this.galleryImages.map(img => `
      <div class="gallery-item reveal-stagger" data-tags="${img.tags.join(' ')}" data-id="${img.id}">
        <img src="${img.src}" alt="${img.alt}" loading="lazy" onerror="this.src='./assets/img/fallback.jpg'">
      </div>
    `).join('');

    container.addEventListener('click', e => {
      const item = e.target.closest('.gallery-item');
      if (item) this.openLightbox(parseInt(item.dataset.id));
    });

    // Filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        document.querySelectorAll('.gallery-item').forEach(item => {
          if (filter === 'all' || item.dataset.tags.includes(filter)) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  },

  // Lightbox
  initLightbox() {
    if (document.querySelector('.lightbox')) return;

    document.body.insertAdjacentHTML('beforeend', `
      <div class="lightbox">
        <div class="lightbox-content">
          <button class="lightbox-close">&times;</button>
          <button class="lightbox-nav lightbox-prev">&#8249;</button>
          <img class="lightbox-image" src="" alt="">
          <button class="lightbox-nav lightbox-next">&#8250;</button>
          <div class="lightbox-caption"></div>
        </div>
      </div>
    `);

    const lightbox = document.querySelector('.lightbox');
    
    // Events
    document.querySelector('.lightbox-close').addEventListener('click', () => this.closeLightbox());
    document.querySelector('.lightbox-prev').addEventListener('click', () => this.showPrevImage());
    document.querySelector('.lightbox-next').addEventListener('click', () => this.showNextImage());
    
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) this.closeLightbox();
    });

    document.addEventListener('keydown', e => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') this.closeLightbox();
      if (e.key === 'ArrowLeft') this.showPrevImage();
      if (e.key === 'ArrowRight') this.showNextImage();
    });

    // Modal images
    document.addEventListener('click', e => {
      if (e.target.classList.contains('modal-image')) {
        this.currentImages = [{ src: e.target.src, alt: e.target.alt }];
        this.currentImageIndex = 0;
        this.showLightboxImage();
        lightbox.classList.add('active');
      }
    });
  },

  openLightbox(imageId) {
    const image = this.galleryImages.find(img => img.id === imageId);
    if (!image) return;

    this.currentImages = this.galleryImages;
    this.currentImageIndex = this.galleryImages.findIndex(img => img.id === imageId);
    this.showLightboxImage();
    document.querySelector('.lightbox').classList.add('active');
  },

  showLightboxImage() {
    const img = document.querySelector('.lightbox-image');
    const caption = document.querySelector('.lightbox-caption');
    const current = this.currentImages[this.currentImageIndex];
    
    img.src = current.src;
    img.alt = current.alt;
    caption.textContent = current.alt;
  },

  showPrevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.currentImages.length) % this.currentImages.length;
    this.showLightboxImage();
  },

  showNextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.currentImages.length;
    this.showLightboxImage();
  },

  closeLightbox() {
    document.querySelector('.lightbox').classList.remove('active');
  },

  // About Carousel Methods
  initAboutCarousel() {
    const carousel = document.querySelector('.about-carousel');
    if (!carousel) return;

    // Get all unique images from our gallery
    this.aboutCarousel.images = this.getAllProjectImages();
    this.aboutCarousel.currentIndex = 0;

    this.renderAboutCarousel();
    this.bindAboutCarouselEvents();
    this.startAboutCarouselAutoSlide();
  },

  getAllProjectImages() {
    // Collect unique images from all our project categories
    const allImages = new Set();
    
    // Add images from galleryImages array (these are our main uploaded images)
    this.galleryImages.forEach(img => {
      allImages.add(JSON.stringify({ src: img.src, alt: img.alt, id: img.id || 0 }));
    });
    
    // Add images from IMAGE_MAP
    Object.values(this.IMAGE_MAP).forEach(imageArray => {
      imageArray.forEach(src => {
        allImages.add(JSON.stringify({ 
          src, 
          alt: 'Beautiful moment at RFCE Senior Living Community',
          id: 0 // Default ID for IMAGE_MAP images
        }));
      });
    });
    
    // Convert back to array and sort by ID (descending) to get newest first
    const imageArray = Array.from(allImages).map(imgStr => JSON.parse(imgStr));
    const sortedImages = imageArray.sort((a, b) => (b.id || 0) - (a.id || 0));
    
    // Return only the last 12 uploaded pictures (most recent)
    return sortedImages.slice(0, 12);
  },

  renderAboutCarousel() {
    const slidesContainer = document.querySelector('.carousel-slides');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    
    if (!slidesContainer || !indicatorsContainer) return;

    // Render slides
    slidesContainer.innerHTML = this.aboutCarousel.images.map((img, index) => `
      <div class="carousel-slide ${index === 0 ? 'active' : ''}">
        <img src="${img.src}" alt="${img.alt}" loading="lazy" onerror="this.src='https://communityandcare.com.au/wp-content/uploads/2020/11/community-and-care-group-center-activity.jpg'">
      </div>
    `).join('');

    // Render indicators
    indicatorsContainer.innerHTML = this.aboutCarousel.images.map((_, index) => `
      <button class="carousel-indicator ${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Go to slide ${index + 1}"></button>
    `).join('');
  },

  bindAboutCarouselEvents() {
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const carousel = document.querySelector('.about-carousel');

    // Navigation buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        this.aboutCarouselPrev();
        this.handleAboutCarouselUserInteraction();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.aboutCarouselNext();
        this.handleAboutCarouselUserInteraction();
      });
    }

    // Indicator buttons
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        this.aboutCarouselGoTo(index);
        this.handleAboutCarouselUserInteraction();
      });
    });

    // Pause auto-slide on hover
    if (carousel) {
      carousel.addEventListener('mouseenter', () => {
        this.stopAboutCarouselAutoSlide();
      });

      carousel.addEventListener('mouseleave', () => {
        if (!this.aboutCarousel.isUserInteracting) {
          this.startAboutCarouselAutoSlide();
        }
      });
    }
  },

  aboutCarouselPrev() {
    const newIndex = (this.aboutCarousel.currentIndex - 1 + this.aboutCarousel.images.length) % this.aboutCarousel.images.length;
    this.aboutCarouselGoTo(newIndex);
  },

  aboutCarouselNext() {
    const newIndex = (this.aboutCarousel.currentIndex + 1) % this.aboutCarousel.images.length;
    this.aboutCarouselGoTo(newIndex);
  },

  aboutCarouselGoTo(index) {
    if (index === this.aboutCarousel.currentIndex) return;

    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');

    // Remove active classes
    slides[this.aboutCarousel.currentIndex]?.classList.remove('active');
    indicators[this.aboutCarousel.currentIndex]?.classList.remove('active');

    // Update index
    this.aboutCarousel.currentIndex = index;

    // Add active classes
    slides[this.aboutCarousel.currentIndex]?.classList.add('active');
    indicators[this.aboutCarousel.currentIndex]?.classList.add('active');
  },

  startAboutCarouselAutoSlide() {
    this.stopAboutCarouselAutoSlide();
    this.aboutCarousel.autoSlideTimer = setInterval(() => {
      this.aboutCarouselNext();
    }, 4000); // 4 seconds as requested
  },

  stopAboutCarouselAutoSlide() {
    if (this.aboutCarousel.autoSlideTimer) {
      clearInterval(this.aboutCarousel.autoSlideTimer);
      this.aboutCarousel.autoSlideTimer = null;
    }
  },

  handleAboutCarouselUserInteraction() {
    this.aboutCarousel.isUserInteracting = true;
    this.stopAboutCarouselAutoSlide();
    
    // Resume auto-slide after 8 seconds of no interaction
    setTimeout(() => {
      this.aboutCarousel.isUserInteracting = false;
      this.startAboutCarouselAutoSlide();
    }, 8000);
  },

  // Blog
  initBlog() {
    const container = document.querySelector('.blog-grid');
    if (!container) return;

    container.innerHTML = this.blogPosts.map(post => `
      <article class="blog-card reveal-stagger" data-id="${post.id}" data-tags="${post.tags.join(' ')}">
        <div class="blog-image">
          <img src="${post.image}" alt="${post.title}" loading="lazy" onerror="this.src='./assets/img/fallback.jpg'">
        </div>
        <div class="blog-content">
          <div class="blog-meta">
            <time>${this.formatDate(post.date)}</time>
            ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
          </div>
          <h3 class="blog-title">${post.title}</h3>
          <p>${post.excerpt}</p>
        </div>
      </article>
    `).join('');

    container.addEventListener('click', e => {
      const card = e.target.closest('.blog-card');
      if (card) this.openModal(parseInt(card.dataset.id));
    });

    // Search
    const search = document.querySelector('.search-input');
    if (search) {
      search.addEventListener('input', e => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll('.blog-card').forEach(card => {
          const title = card.querySelector('.blog-title').textContent.toLowerCase();
          const excerpt = card.querySelector('p').textContent.toLowerCase();
          card.style.display = title.includes(term) || excerpt.includes(term) ? 'block' : 'none';
        });
      });
    }

    // Filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        document.querySelectorAll('.blog-card').forEach(card => {
          card.style.display = filter === 'all' || card.dataset.tags.includes(filter) ? 'block' : 'none';
        });
      });
    });
  },

  // Modal
  initModal() {
    if (document.querySelector('.modal')) return;

    document.body.insertAdjacentHTML('beforeend', `
      <div class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <button class="modal-close">&times;</button>
            <h1 class="modal-title"></h1>
            <div class="modal-meta"></div>
          </div>
          <div class="modal-body">
            <img class="modal-image" src="" alt="">
            <div class="modal-text"></div>
          </div>
        </div>
      </div>
    `);

    const modal = document.querySelector('.modal');
    document.querySelector('.modal-close').addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('active'); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') modal.classList.remove('active'); });
  },

  openModal(postId) {
    const post = this.blogPosts.find(p => p.id === postId);
    if (!post) return;

    document.querySelector('.modal-title').textContent = post.title;
    document.querySelector('.modal-meta').innerHTML = `
      <time>${this.formatDate(post.date)}</time>
      ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
    `;
    document.querySelector('.modal-image').src = post.image;
    document.querySelector('.modal-image').alt = post.title;
    document.querySelector('.modal-text').innerHTML = post.content;
    document.querySelector('.modal').classList.add('active');
  },

  // Contact
  initContact() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();
      
      const inputs = form.querySelectorAll('.form-input, .form-textarea');
      let valid = true;

      inputs.forEach(input => {
        const group = input.closest('.form-group');
        const error = group.querySelector('.form-error');
        
        if (!input.value.trim()) {
          group.classList.add('error');
          error.textContent = `${input.name} is required`;
          error.style.display = 'block';
          valid = false;
        } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
          group.classList.add('error');
          error.textContent = 'Please enter a valid email';
          error.style.display = 'block';
          valid = false;
        } else {
          group.classList.remove('error');
          error.style.display = 'none';
        }
      });

      if (valid) {
        this.showToast('Message sent successfully! We\'ll get back to you soon.');
        form.reset();
      }
    });

    // Clear errors on input
    form.querySelectorAll('.form-input, .form-textarea').forEach(input => {
      input.addEventListener('input', () => {
        input.closest('.form-group').classList.remove('error');
      });
    });
  },

  // Utilities
  formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  },

  showToast(message, isError = false) {
    const toast = document.createElement('div');
    toast.className = `toast ${isError ? 'error' : ''}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 250);
    }, 3000);
  },

  // Tour Scheduler
  tourState: {
    step: 1,
    date: null,
    time: null,
    details: {
      name: '',
      email: '',
      phone: '',
      notes: '',
      for: 'self'
    }
  },

  initTourScheduler() {
    // Create modal HTML
    this.createTourModal();
    
    // Bind tour trigger buttons
    document.querySelectorAll('[data-action="schedule-tour"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openTourModal();
      });
    });
    
    // Restore draft from localStorage
    this.restoreTourDraft();
  },

  createTourModal() {
    if (document.querySelector('.tour-backdrop')) return;

    const modalHTML = `
      <div class="tour-backdrop" id="tourModal">
        <div class="tour-modal">
          <div class="tour-header">
            <button class="tour-close" aria-label="Close tour scheduler">&times;</button>
            <h2 class="tour-title">Schedule a Tour</h2>
            <p class="tour-subtitle">Find the perfect time to visit our community</p>
          </div>
          
          <div class="tour-steps">
            <div class="tour-step active" data-step="1">
              <div class="tour-step-number">1</div>
              <div class="tour-step-label">Date</div>
            </div>
            <div class="tour-step-connector"></div>
            <div class="tour-step" data-step="2">
              <div class="tour-step-number">2</div>
              <div class="tour-step-label">Time</div>
            </div>
            <div class="tour-step-connector"></div>
            <div class="tour-step" data-step="3">
              <div class="tour-step-number">3</div>
              <div class="tour-step-label">Details</div>
            </div>
            <div class="tour-step-connector"></div>
            <div class="tour-step" data-step="4">
              <div class="tour-step-number">4</div>
              <div class="tour-step-label">Confirm</div>
            </div>
          </div>
          
          <div class="tour-content">
            <div class="tour-step-content active"></div>
          </div>
          
          <div class="tour-nav">
            <div class="tour-nav-left">
              <button class="btn btn--ghost tour-back" style="display: none;">← Back</button>
            </div>
            <div class="tour-nav-right">
              <button class="btn btn-primary tour-next" disabled>Next →</button>
            </div>
          </div>
          
          <div class="tour-announcements" aria-live="polite" aria-atomic="true"></div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    this.bindTourEvents();
  },

  bindTourEvents() {
    const modal = document.querySelector('.tour-backdrop');
    const closeBtn = document.querySelector('.tour-close');
    const backBtn = document.querySelector('.tour-back');
    const nextBtn = document.querySelector('.tour-next');

    // Close events
    closeBtn.addEventListener('click', () => this.closeTourModal());
    modal.addEventListener('click', (e) => {
      if (e.target === modal) this.closeTourModal();
    });

    // Navigation
    backBtn.addEventListener('click', () => this.tourPrevStep());
    nextBtn.addEventListener('click', () => this.tourNextStep());

    // Keyboard events
    document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('active')) return;
      
      if (e.key === 'Escape') {
        this.closeTourModal();
      }
    });
  },

  openTourModal() {
    const modal = document.querySelector('.tour-backdrop');
    modal.classList.add('active');
    this.renderTourStep();
    this.trapFocus(modal);
    
    // Store the trigger element for focus restoration
    this.tourTrigger = document.activeElement;
  },

  closeTourModal() {
    const modal = document.querySelector('.tour-backdrop');
    modal.classList.remove('active');
    this.releaseFocus();
    
    // Restore focus to trigger
    if (this.tourTrigger) {
      this.tourTrigger.focus();
    }
  },

  tourNextStep() {
    if (this.tourState.step < 4) {
      this.tourState.step++;
      this.saveTourDraft();
      this.renderTourStep();
    }
  },

  tourPrevStep() {
    if (this.tourState.step > 1) {
      this.tourState.step--;
      this.renderTourStep();
    }
  },

  renderTourStep() {
    const content = document.querySelector('.tour-step-content');
    const backBtn = document.querySelector('.tour-back');
    const nextBtn = document.querySelector('.tour-next');
    
    // Update stepper
    document.querySelectorAll('.tour-step').forEach((step, index) => {
      const stepNum = index + 1;
      step.classList.toggle('active', stepNum === this.tourState.step);
      step.classList.toggle('completed', stepNum < this.tourState.step);
    });
    
    // Show/hide navigation
    backBtn.style.display = this.tourState.step > 1 ? 'block' : 'none';
    
    // Render step content
    switch (this.tourState.step) {
      case 1:
        this.renderCalendarStep(content);
        nextBtn.textContent = 'Next →';
        nextBtn.disabled = !this.tourState.date;
        break;
      case 2:
        nextBtn.textContent = 'Next →';
        nextBtn.disabled = !this.tourState.time;
        this.renderTimeStep(content); // Now async but we don't await here to avoid blocking UI
        break;
      case 3:
        this.renderDetailsStep(content);
        nextBtn.textContent = 'Next →';
        nextBtn.disabled = !this.validateDetails();
        break;
      case 4:
        this.renderConfirmStep(content);
        nextBtn.style.display = 'none';
        break;
    }
    
    // Add reveal animation
    content.classList.remove('visible');
    setTimeout(() => content.classList.add('visible'), 50);
  },

  renderCalendarStep(container) {
    const today = new Date();
    const currentDate = this.tourCalendarDate || new Date();
    
    container.innerHTML = `
      <div class="cal">
        <div class="cal__header">
          <button class="cal__nav" data-action="prev-month" aria-label="Previous month">‹</button>
          <div class="cal__month">${this.formatMonthYear(currentDate)}</div>
          <button class="cal__nav" data-action="next-month" aria-label="Next month">›</button>
        </div>
        <div class="cal__grid">
          ${this.renderCalendarGrid(currentDate)}
        </div>
      </div>
    `;
    
    // Bind calendar events
    container.querySelector('[data-action="prev-month"]').addEventListener('click', () => {
      this.tourCalendarDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
      this.renderCalendarStep(container);
    });
    
    container.querySelector('[data-action="next-month"]').addEventListener('click', () => {
      this.tourCalendarDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
      this.renderCalendarStep(container);
    });
    
    // Bind day selection
    container.querySelectorAll('.cal__day:not(.cal__day--disabled)').forEach(dayBtn => {
      dayBtn.addEventListener('click', () => {
        const date = dayBtn.dataset.date;
        this.tourState.date = date;
        // Clear time selection when date changes
        this.tourState.time = null;
        this.tourState.selectedHour = null;
        this.tourState.selectedMinute = null;
        this.saveTourDraft();
        
        // Update UI
        container.querySelectorAll('.cal__day').forEach(d => d.classList.remove('cal__day--selected'));
        dayBtn.classList.add('cal__day--selected');
        
        // Enable next button
        document.querySelector('.tour-next').disabled = false;
      });
    });
  },

  renderCalendarGrid(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time for accurate comparison
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 90);
    
    // Get first day of month and days in month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    let html = '';
    
    // Day headers
    ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].forEach(day => {
      html += `<div class="cal__day-header">${day}</div>`;
    });
    
    // Empty cells for days before month starts
    for (let i = 0; i < startingDay; i++) {
      html += '<div class="cal__day cal__day--other-month"></div>';
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(year, month, day);
      const dateStr = this.formatDateISO(currentDate);
      const isPast = currentDate < today;
      const isFuture = currentDate > maxDate;
      const isToday = this.isSameDay(currentDate, new Date());
      const isSelected = this.tourState.date === dateStr;
      
      const classes = ['cal__day'];
      if (isPast || isFuture) classes.push('cal__day--disabled');
      if (isToday) classes.push('cal__day--today');
      if (isSelected) classes.push('cal__day--selected');
      
      html += `<button class="${classes.join(' ')}" data-date="${dateStr}" ${isPast || isFuture ? 'disabled' : ''}>${day}</button>`;
    }
    
    return html;
  },

  async renderTimeStep(container) {
    const selectedDate = new Date(this.tourState.date);
    const isToday = this.isSameDay(selectedDate, new Date());
    const currentHour = new Date().getHours();
    
    // Show loading state
    container.innerHTML = `
      <div class="tour-form">
        <h3>Choose your preferred time</h3>
        <p>Loading availability for ${this.formatDateLong(selectedDate)}...</p>
        <div class="times"></div>
      </div>
    `;
    
    try {
      // Get booked slots from Supabase
      const bookedTimes = await TourScheduler.getBookedSlotsForDay(selectedDate);
      
      // Add past times if today
      const disabledTimes = [...bookedTimes];
      if (isToday) {
        for (let hour = 9; hour <= currentHour; hour++) {
          const timeStr = `${hour.toString().padStart(2, '0')}:00`;
          if (!disabledTimes.includes(timeStr)) {
            disabledTimes.push(timeStr);
          }
        }
      }
      
      // Update content with actual availability
      container.innerHTML = `
        <div class="tour-form">
          <h3>Choose your preferred time</h3>
          <p>Available times for ${this.formatDateLong(selectedDate)}</p>
          <div class="times"></div>
        </div>
      `;
      
      // Paint availability
      TourScheduler.paintAvailability(container, disabledTimes, this.tourState.time);
      
      // Bind time selection events
      container.querySelectorAll('.time__slot:not(.time__slot--disabled)').forEach(timeBtn => {
        timeBtn.addEventListener('click', () => {
          const time = timeBtn.dataset.time;
          this.tourState.time = time;
          this.tourState.selectedHour = parseInt(timeBtn.dataset.hour);
          this.tourState.selectedMinute = parseInt(timeBtn.dataset.minute);
          this.saveTourDraft();
          
          // Update UI
          container.querySelectorAll('.time__slot').forEach(t => t.classList.remove('time__slot--selected'));
          timeBtn.classList.add('time__slot--selected');
          
          // Enable next button
          document.querySelector('.tour-next').disabled = false;
        });
      });
      
    } catch (error) {
      console.error('Failed to load availability:', error);
      container.innerHTML = `
        <div class="tour-form">
          <h3>Choose your preferred time</h3>
          <p style="color: var(--text-secondary);">Unable to load availability. Please try again.</p>
          <button class="btn btn--secondary" onclick="RFCEApp.renderTimeStep(document.querySelector('.tour-step-content'))">Retry</button>
        </div>
      `;
    }
  },

  renderDetailsStep(container) {
    container.innerHTML = `
      <div class="tour-form">
        <h3>Your Contact Information</h3>
        
        <div class="form-group">
          <label class="form-label">I'm inquiring for:</label>
          <div class="tour-radio-group">
            <label class="tour-radio">
              <input type="radio" name="inquiringFor" value="self" ${this.tourState.details.for === 'self' ? 'checked' : ''}>
              Self
            </label>
            <label class="tour-radio">
              <input type="radio" name="inquiringFor" value="loved-one" ${this.tourState.details.for === 'loved-one' ? 'checked' : ''}>
              Loved One
            </label>
          </div>
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Full Name *</label>
            <input type="text" class="form-input" name="name" value="${this.tourState.details.name}" required>
            <div class="form-error">Please enter your full name</div>
          </div>
          
          <div class="form-group">
            <label class="form-label">Email Address *</label>
            <input type="email" class="form-input" name="email" value="${this.tourState.details.email}" required>
            <div class="form-error">Please enter a valid email address</div>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">Phone Number *</label>
          <input type="tel" class="form-input" name="phone" value="${this.tourState.details.phone}" required>
          <div class="form-error">Please enter your phone number</div>
        </div>
        
        <div class="form-group">
          <label class="form-label">Additional Notes (Optional)</label>
          <textarea class="form-input" name="notes" rows="3" placeholder="Any specific questions or requirements?">${this.tourState.details.notes}</textarea>
        </div>
      </div>
    `;
    
    // Bind form events
    const inputs = container.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        this.updateTourDetails();
        this.validateTourField(input);
        document.querySelector('.tour-next').disabled = !this.validateDetails();
      });
      
      input.addEventListener('blur', () => {
        this.validateTourField(input);
      });
    });
    
    // Radio buttons
    container.querySelectorAll('input[name="inquiringFor"]').forEach(radio => {
      radio.addEventListener('change', () => {
        this.tourState.details.for = radio.value;
        this.saveTourDraft();
      });
    });
  },

  renderConfirmStep(container) {
    const date = new Date(this.tourState.date);
    const timeDisplay = this.formatTime12Hour(...this.tourState.time.split(':'));
    
    container.innerHTML = `
      <div class="tour-form">
        <h3>Confirm Your Tour</h3>
        
        <div class="tour-summary">
          <h3>Tour Details</h3>
          <div class="tour-summary-item">
            <div class="tour-summary-label">Date & Time</div>
            <div class="tour-summary-value">${this.formatDateLong(date)} at ${timeDisplay}</div>
          </div>
          <div class="tour-summary-item">
            <div class="tour-summary-label">Name</div>
            <div class="tour-summary-value">${this.tourState.details.name}</div>
          </div>
          <div class="tour-summary-item">
            <div class="tour-summary-label">Email</div>
            <div class="tour-summary-value">${this.tourState.details.email}</div>
          </div>
          <div class="tour-summary-item">
            <div class="tour-summary-label">Phone</div>
            <div class="tour-summary-value">${this.tourState.details.phone}</div>
          </div>
          ${this.tourState.details.notes ? `
            <div class="tour-summary-item">
              <div class="tour-summary-label">Notes</div>
              <div class="tour-summary-value">${this.tourState.details.notes}</div>
            </div>
          ` : ''}
        </div>
        
        <div class="tour-actions">
          <button class="btn btn-primary" onclick="RFCEApp.bookTour()" id="book-tour-btn">Book Tour</button>
          <button class="btn btn--secondary" onclick="RFCEApp.downloadICS()">Download Calendar Event</button>
          <button class="btn btn--ghost" onclick="RFCEApp.copyTourDetails()">Copy Details</button>
        </div>
        
        <div class="tour-booking-error" style="display: none; color: var(--text-error, #d32f2f); margin-top: var(--space-md); padding: var(--space-sm); background: rgba(211, 47, 47, 0.1); border-radius: var(--border-radius); text-align: center;"></div>
      </div>
    `;
  },

  // Helper methods
  updateTourDetails() {
    const container = document.querySelector('.tour-step-content');
    this.tourState.details.name = container.querySelector('[name="name"]')?.value || '';
    this.tourState.details.email = container.querySelector('[name="email"]')?.value || '';
    this.tourState.details.phone = container.querySelector('[name="phone"]')?.value || '';
    this.tourState.details.notes = container.querySelector('[name="notes"]')?.value || '';
    this.saveTourDraft();
  },

  validateTourField(field) {
    const group = field.closest('.form-group');
    let isValid = true;
    
    if (field.required && !field.value.trim()) {
      isValid = false;
    } else if (field.type === 'email' && field.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(field.value);
    }
    
    group.classList.toggle('error', !isValid);
    return isValid;
  },

  validateDetails() {
    const { name, email, phone } = this.tourState.details;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return name.trim() && 
           email.trim() && emailRegex.test(email) && 
           phone.trim();
  },

  async bookTour() {
    const bookBtn = document.querySelector('#book-tour-btn');
    const errorDiv = document.querySelector('.tour-booking-error');
    
    if (!bookBtn) return;
    
    // Disable button and show loading
    bookBtn.disabled = true;
    bookBtn.textContent = 'Booking...';
    errorDiv.style.display = 'none';
    
    try {
      const dateObj = new Date(this.tourState.date);
      const hour = this.tourState.selectedHour || parseInt(this.tourState.time.split(':')[0]);
      const minute = this.tourState.selectedMinute || parseInt(this.tourState.time.split(':')[1]);
      
      await TourScheduler.tryBook({
        dateObj,
        hour,
        minute,
        name: this.tourState.details.name,
        email: this.tourState.details.email,
        phone: this.tourState.details.phone,
        note: this.tourState.details.notes
      });
      
      // Success! Store for UX and show success state
      localStorage.setItem('tourSelection', JSON.stringify({
        date: this.tourState.date,
        time: this.tourState.time
      }));
      
      // Show success state
      this.showTourSuccess();
      
    } catch (error) {
      console.error('Booking failed:', error);
      
      if (error.message === 'This time was just booked.') {
        // Show conflict error and go back to time step
        errorDiv.textContent = 'That time was just taken. Please pick another.';
        errorDiv.style.display = 'block';
        
        setTimeout(() => {
          this.tourState.step = 2;
          this.tourState.time = null;
          this.tourState.selectedHour = null;
          this.tourState.selectedMinute = null;
          this.renderTourStep();
        }, 2000);
      } else {
        // Show generic error
        errorDiv.textContent = 'Booking failed. Please try again or contact us directly.';
        errorDiv.style.display = 'block';
        bookBtn.disabled = false;
        bookBtn.textContent = 'Book Tour';
      }
    }
  },
  
  showTourSuccess() {
    const content = document.querySelector('.tour-step-content');
    const date = new Date(this.tourState.date);
    const timeDisplay = this.formatTime12Hour(...this.tourState.time.split(':'));
    
    content.innerHTML = `
      <div class="tour-form" style="text-align: center;">
        <div style="color: var(--brand); font-size: 3rem; margin-bottom: var(--space-md);">✓</div>
        <h3 style="color: var(--brand);">Tour Booked Successfully!</h3>
        <p style="margin: var(--space-md) 0;">Your tour has been confirmed for:</p>
        <div style="background: var(--bg-light); padding: var(--space-md); border-radius: var(--border-radius); margin: var(--space-lg) 0;">
          <strong>${this.formatDateLong(date)} at ${timeDisplay}</strong>
        </div>
        <p style="color: var(--text-secondary); margin-bottom: var(--space-lg);">We'll send you a confirmation email shortly with all the details.</p>
        
        <div class="tour-actions">
          <button class="btn btn-primary" onclick="RFCEApp.finishTourBooking()">Close</button>
          <button class="btn btn--secondary" onclick="RFCEApp.downloadICS()">Download Calendar Event</button>
        </div>
      </div>
    `;
  },
  
  finishTourBooking() {
    this.closeTourModal();
    this.resetTourState();
    this.showToast('Tour booked successfully! We\'ll be in touch soon.');
  },
  
  resetTourState() {
    this.tourState = {
      step: 1,
      date: null,
      time: null,
      selectedHour: null,
      selectedMinute: null,
      details: {
        name: '',
        email: '',
        phone: '',
        notes: '',
        for: 'self'
      }
    };
    localStorage.removeItem('tourDraft');
  },

  saveAndGoToContact() {
    // This method now only handles UX prefilling, not actual booking
    // Store selection for UX convenience only
    this.prefillContactForm();
    this.closeTourModal();
    
    // Navigate to contact page if not already there
    if (!window.location.pathname.includes('contact.html')) {
      window.location.href = './contact.html';
    }
    
    // Clear tour draft
    localStorage.removeItem('tourDraft');
    this.showToast('Tour details saved for contact form.');
  },

  prefillContactForm() {
    // Show the tour summary container
    const summaryContainer = document.querySelector('#tour-summary-container');
    const summaryChip = document.querySelector('#tour-summary-chip');
    const hiddenDate = document.querySelector('#preferred_date');
    const hiddenTime = document.querySelector('#preferred_time');
    
    if (summaryContainer && summaryChip && hiddenDate && hiddenTime) {
      const date = new Date(this.tourState.date);
      const timeDisplay = this.formatTime12Hour(...this.tourState.time.split(':'));
      
      // Set hidden input values
      hiddenDate.value = this.tourState.date;
      hiddenTime.value = this.tourState.time;
      
      // Create summary chip with remove button
      summaryChip.innerHTML = `
        Tour scheduled: ${this.formatDateLong(date)} at ${timeDisplay}
        <button type="button" class="tour-summary-chip-remove" onclick="RFCEApp.removeTourSummary()" aria-label="Remove tour booking">×</button>
      `;
      
      // Show the container
      summaryContainer.style.display = 'block';
    }
    
    // Pre-fill form fields
    const form = document.querySelector('.contact-form');
    if (!form) return;
    
    const nameField = form.querySelector('#name');
    const emailField = form.querySelector('#email');
    const phoneField = form.querySelector('#phone');
    const messageField = form.querySelector('#message');
    
    if (nameField && !nameField.value) nameField.value = this.tourState.details.name;
    if (emailField && !emailField.value) emailField.value = this.tourState.details.email;
    if (phoneField && !phoneField.value) phoneField.value = this.tourState.details.phone;
    
    if (messageField && !messageField.value) {
      const date = new Date(this.tourState.date);
      const timeDisplay = this.formatTime12Hour(...this.tourState.time.split(':'));
      const tourInfo = `I have scheduled a tour for ${this.formatDateLong(date)} at ${timeDisplay}. ${this.tourState.details.notes ? this.tourState.details.notes : ''}`;
      messageField.value = tourInfo.trim();
    }
    
    // Focus first visible field
    setTimeout(() => {
      if (nameField && !nameField.value) nameField.focus();
      else if (messageField) messageField.focus();
    }, 100);
  },

  downloadICS() {
    const date = new Date(this.tourState.date);
    const [hours, minutes] = this.tourState.time.split(':').map(Number);
    
    // Set start time
    const startTime = new Date(date);
    startTime.setHours(hours, minutes, 0, 0);
    
    // Set end time (45 minutes later)
    const endTime = new Date(startTime);
    endTime.setMinutes(endTime.getMinutes() + 45);
    
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//RFCE//Tour Scheduler//EN',
      'BEGIN:VEVENT',
      `DTSTART:${this.formatDateTimeISO(startTime)}`,
      `DTEND:${this.formatDateTimeISO(endTime)}`,
      'SUMMARY:Tour at RFCE Senior Living Community',
      'DESCRIPTION:Scheduled tour of RFCE Senior Living Community facilities and amenities.',
      'LOCATION:RFCE Senior Living Community\\, 123 Senior Living Lane\\, Wellness City\\, WC 12345',
      `ORGANIZER:mailto:tours@rfce.com`,
      `ATTENDEE:mailto:${this.tourState.details.email}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');
    
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rfce-tour.ics';
    a.click();
    URL.revokeObjectURL(url);
    
    this.showToast('Calendar event downloaded!');
  },

  copyTourDetails() {
    const date = new Date(this.tourState.date);
    const timeDisplay = this.formatTime12Hour(...this.tourState.time.split(':'));
    
    const details = [
      'RFCE Tour Details:',
      '',
      `Date: ${this.formatDateLong(date)}`,
      `Time: ${timeDisplay}`,
      `Name: ${this.tourState.details.name}`,
      `Email: ${this.tourState.details.email}`,
      `Phone: ${this.tourState.details.phone}`,
      this.tourState.details.notes ? `Notes: ${this.tourState.details.notes}` : '',
      '',
      'RFCE Senior Living Community',
      '123 Senior Living Lane',
      'Wellness City, WC 12345',
      'Phone: (555) 123-4567'
    ].filter(line => line !== '').join('\n');
    
    navigator.clipboard.writeText(details).then(() => {
      this.showToast('Details copied to clipboard!');
    }).catch(() => {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = details;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      this.showToast('Details copied to clipboard!');
    });
  },

  removeTourSummary() {
    const summaryContainer = document.querySelector('#tour-summary-container');
    const hiddenDate = document.querySelector('#preferred_date');
    const hiddenTime = document.querySelector('#preferred_time');
    
    if (summaryContainer) {
      summaryContainer.style.display = 'none';
    }
    
    if (hiddenDate) hiddenDate.value = '';
    if (hiddenTime) hiddenTime.value = '';
    
    // Clear the message field tour info
    const messageField = document.querySelector('#message');
    if (messageField && messageField.value.includes('I have scheduled a tour')) {
      messageField.value = '';
    }
    
    this.showToast('Tour booking removed');
  },

  saveTourDraft() {
    localStorage.setItem('tourDraft', JSON.stringify(this.tourState));
  },

  restoreTourDraft() {
    const draft = localStorage.getItem('tourDraft');
    if (draft) {
      try {
        const parsed = JSON.parse(draft);
        this.tourState = { ...this.tourState, ...parsed };
      } catch (e) {
        // Invalid draft, ignore
      }
    }
  },

  // Date/Time formatting helpers
  formatMonthYear(date) {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  },

  formatDateLong(date) {
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  },

  formatDateISO(date) {
    return date.toISOString().split('T')[0];
  },

  formatDateTimeISO(date) {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  },

  formatTime12Hour(hours, minutes) {
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
    return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
  },

  isSameDay(date1, date2) {
    return date1.toDateString() === date2.toDateString();
  },

  // Focus management helpers
  trapFocus(element) {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    // Focus first element
    firstElement.focus();
    
    const trapHandler = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };
    
    element.addEventListener('keydown', trapHandler);
    this.focusTrapHandler = trapHandler;
    this.focusTrapElement = element;
  },

  releaseFocus() {
    if (this.focusTrapElement && this.focusTrapHandler) {
      this.focusTrapElement.removeEventListener('keydown', this.focusTrapHandler);
      this.focusTrapHandler = null;
      this.focusTrapElement = null;
    }
  }
};

// ===== Supabase DataService (front-end only) =====
const DataService = {
  // Auth
  signIn(email, password){ return supa.auth.signInWithPassword({ email, password }); },
  signOut(){ return supa.auth.signOut(); },
  async isAdmin(){ const { data } = await supa.rpc('is_admin'); return !!data; },

  // Posts
  async listPosts(){
    const { data, error } = await supa.from('posts')
      .select('id,slug,title,excerpt,cover_path,tags,published_at')
      .eq('status','published').order('published_at',{ascending:false});
    if (error) throw error; return data||[];
  },
  async getPost(slug){ const { data, error } = await supa.from('posts').select('*').eq('slug',slug).single(); if (error) throw error; return data; },
  async createPost(post){ const { data, error } = await supa.from('posts').insert(post).select().single(); if (error) throw error; return data; },
  async updatePost(id, patch){ const { data, error } = await supa.from('posts').update(patch).eq('id',id).select().single(); if (error) throw error; return data; },
  async deletePost(id){ const { error } = await supa.from('posts').delete().eq('id',id); if (error) throw error; return true; },

  // Images (DB + Storage)
  async listImages(){
    const { data, error } = await supa.from('images').select('*').order('created_at',{descending:true});
    if (error) throw error; return data||[];
  },
  async uploadImage(file, alt='', meta){
    const safe = file.name.replace(/\s+/g,'_');
    const path = `uploads/${Date.now()}_${safe}`;
    const up = await supa.storage.from('images').upload(path, file, { cacheControl:'3600' });
    if (up.error) throw up.error;
    const tags = Array.isArray(meta?.tags) ? meta.tags : [];
    await supa.from('images').insert({ path, alt, category: meta?.category || 'gallery', tags });
    const { data: { publicUrl } } = supa.storage.from('images').getPublicUrl(path);
    return { path, publicUrl };
  },
  async deleteImage(id, path){
    await supa.storage.from('images').remove([path]);
    const { error } = await supa.from('images').delete().eq('id', id);
    if (error) throw error; return true;
  },

  // Leads
  async createLead(lead) { 
    const { error } = await supa.from('leads').insert(lead); 
    if (error) throw error; 
    
    // Send email notification (non-blocking)
    try {
      await supa.functions.invoke('notify-lead', { body: lead });
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
      // Don't throw - the lead was saved successfully
    }
    
    return true; 
  },

  // Tour Slots
  async getBookedSlotsForDay(dateObj){
    const startOfDayUTC = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate()).toISOString();
    const endOfDayUTC = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate() + 1).toISOString();
    const { data, error } = await supa.from('tour_slots')
      .select('slot')
      .gte('slot', startOfDayUTC)
      .lt('slot', endOfDayUTC);
    if (error) throw error;
    return (data || []).map(row => {
      const localTime = new Date(row.slot);
      return `${localTime.getHours().toString().padStart(2, '0')}:${localTime.getMinutes().toString().padStart(2, '0')}`;
    });
  },

  async tryBook({dateObj, hour, minute, name, email, phone, note}){
    const slotISO = TourScheduler.buildLocalSlotISO(dateObj, hour, minute);
    const { error } = await supa.from('tour_slots').insert({ 
      slot: slotISO, 
      name, 
      email, 
      phone, 
      note 
    });
    
    if (error) {
      if (error.code === '23505' || error.details?.includes('duplicate') || error.message?.includes('duplicate')) {
        throw new Error('This time was just booked.');
      }
      throw error;
    }
    
    // Also create a lead entry
    const dateStr = dateObj.toISOString().split('T')[0];
    const timeStr = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    await this.createLead({ 
      name, 
      email, 
      phone, 
      message: note || 'Tour booking', 
      source: 'tour',
      preferred_date: dateStr,
      preferred_time: timeStr
    });
    
    return true;
  },

  // Settings
  async getSettings(){ const { data } = await supa.from('settings').select('*').eq('id',1).maybeSingle(); return data||{}; }
};

// ===== Tour Scheduler Module =====
const TourScheduler = {
  buildLocalSlotISO(dateObj, hour, minute = 0) {
    const localDateTime = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), hour, minute);
    return localDateTime.toISOString();
  },

  async getBookedSlotsForDay(dateObj) {
    return await DataService.getBookedSlotsForDay(dateObj);
  },

  generateTimes() {
    const times = [];
    for (let hour = 9; hour <= 17; hour++) {
      times.push({
        value: `${hour.toString().padStart(2, '0')}:00`,
        display: this.formatTime12Hour(hour, 0),
        hour,
        minute: 0
      });
    }
    return times;
  },

  formatTime12Hour(hours, minutes) {
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
    return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
  },

  paintAvailability(container, disabledList, selectedTime) {
    const times = this.generateTimes();
    
    const timesHTML = times.map(time => {
      const isDisabled = disabledList.includes(time.value);
      const isSelected = selectedTime === time.value;
      
      let classes = ['time__slot'];
      if (isSelected) classes.push('time__slot--selected');
      if (isDisabled) classes.push('time__slot--disabled');
      
      return `
        <button class="${classes.join(' ')}" 
                data-time="${time.value}" 
                data-hour="${time.hour}"
                data-minute="${time.minute}"
                ${isDisabled ? 'disabled aria-disabled="true" title="Unavailable"' : ''}>
          ${time.display}
        </button>
      `;
    }).join('');
    
    container.querySelector('.times').innerHTML = timesHTML;
  },

  async tryBook({dateObj, hour, minute, name, email, phone, note}) {
    return await DataService.tryBook({dateObj, hour, minute, name, email, phone, note});
  }
};

// ===== Page initializers =====
async function initBlogList(){
  if (!document.body.classList.contains('page-blog')) return;
  const list = document.querySelector('[data-blog-list]'); if (!list) return;
  const posts = await DataService.listPosts();
  
  let allPosts = posts;
  let state = { tag: 'all', query: '' };
  
  function render(postList) {
    list.innerHTML = postList.map(p=>{
      const url = p.cover_path ? supa.storage.from('images').getPublicUrl(p.cover_path).data.publicUrl : 'assets/img/fallback.jpg';
      return `<article class="post-card">
        <img src="${url}" alt="" loading="lazy" onerror="this.src='assets/img/fallback.jpg'">
        <h3>${p.title}</h3>
        <p>${p.excerpt||''}</p>
        <a href="blog.html#${p.slug}" class="btn btn--ghost">Read</a>
      </article>`;
    }).join('');
  }
  
  function filterAndRender() {
    let filtered = allPosts;
    
    // Apply tag filter
    if (state.tag !== 'all') {
      filtered = filtered.filter(p => 
        Array.isArray(p.tags) && 
        p.tags.some(t => t.toLowerCase() === state.tag.toLowerCase())
      );
    }
    
    // Apply search filter
    if (state.query) {
      filtered = filtered.filter(post => {
        const title = post.title.toLowerCase();
        const excerpt = (post.excerpt || '').toLowerCase();
        const tags = Array.isArray(post.tags) ? post.tags.join(' ').toLowerCase() : '';
        return title.includes(state.query) || excerpt.includes(state.query) || tags.includes(state.query);
      });
    }
    
    render(filtered);
  }
  
  // Wire tag filters
  const bar = document.querySelector('[data-blog-filters]');
  if (bar && !bar.dataset.initialized){
    bar.dataset.initialized = 'true'; // Prevent duplicate listeners
    bar.addEventListener('click', (e)=>{
      const btn = e.target.closest('[data-tag]'); if(!btn) return;
      bar.querySelectorAll('.chip').forEach(c=>c.classList.remove('chip--active'));
      btn.classList.add('chip--active');
      state.tag = btn.dataset.tag;
      filterAndRender();
    });
  }
  
  // Wire search with debounce
  const search = document.querySelector('[data-blog-search]');
  const wrap = document.querySelector('[data-blog-search-wrap]');
  const clearBtn = wrap?.querySelector('[data-search-clear]');
  
  if (search && wrap && !wrap.dataset.setup) {
    wrap.dataset.setup = 'true';
    
    let debounceTimer;
    search.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      const value = e.target.value.trim();
      
      // Toggle clear button visibility
      if (clearBtn) {
        clearBtn.hidden = value === '';
      }
      
      debounceTimer = setTimeout(() => {
        state.query = value.toLowerCase();
        filterAndRender();
      }, 200);
    });
    
    // Wire clear button
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        search.value = '';
        state.query = '';
        clearBtn.hidden = true;
        filterAndRender();
        search.focus();
      });
    }
  }
  
  // Initial render
  render(allPosts);
}

async function initGallery(){
  if (!document.body.classList.contains('page-gallery')) return;
  const grid = document.querySelector('[data-gallery-grid]'); if (!grid) return;
  const images = await DataService.listImages();
  images.sort((a,b)=> new Date(b.created_at) - new Date(a.created_at));
  
  let allImages = images;
  
  function render(list) {
    grid.innerHTML = list.map(i=>{
      const url = supa.storage.from('images').getPublicUrl(i.path).data.publicUrl;
      return `<a href="${url}" data-lightbox><img src="${url}" alt="${i.alt||''}" loading="lazy" onerror="this.src='assets/img/fallback.jpg'"></a>`;
    }).join('');
  }
  
  // Wire filters
  const bar = document.querySelector('[data-gallery-filters]');
  if (bar && !bar.dataset.initialized){
    bar.dataset.initialized = 'true'; // Prevent duplicate listeners
    bar.addEventListener('click', (e)=>{
      const btn = e.target.closest('[data-filter]'); if(!btn) return;
      bar.querySelectorAll('.chip').forEach(c=>c.classList.remove('chip--active'));
      btn.classList.add('chip--active');
      const key = btn.dataset.filter;
      const list = key==='all'
        ? allImages
        : allImages.filter(i => 
            (i.category && i.category.toLowerCase()===key) ||
            (Array.isArray(i.tags) && i.tags.map(t=>t.toLowerCase()).includes(key))
          );
      render(list);
    });
  }
  
  // Initial render
  render(allImages);
}

function initContactForm(){
  const form = document.querySelector('[data-contact-form]'); if (!form) return;
  
  // Handle tour prefill from localStorage
  try {
    const saved = JSON.parse(localStorage.getItem('tourSelection')||'null');
    if (saved) {
      const d=document.createElement('input'); d.type='hidden'; d.name='preferred_date'; d.value=saved.date;
      const t=document.createElement('input'); t.type='hidden'; t.name='preferred_time'; t.value=saved.time;
      form.append(d,t);
    }
  } catch(_){}
  
  // Remove existing listeners to prevent duplicates
  if (form.dataset.initialized) return;
  form.dataset.initialized = 'true';
  
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    
    // Validate form
    const inputs = form.querySelectorAll('.form-input, .form-textarea');
    let valid = true;
    
    inputs.forEach(input => {
      const group = input.closest('.form-group');
      const error = group.querySelector('.form-error');
      const inputName = input.getAttribute('name');
      const inputValue = input.value.trim();
      
      // Clear previous error state
      group.classList.remove('error');
      error.style.display = 'none';
      
      // Check required fields
      if (!inputValue && input.required) {
        group.classList.add('error');
        error.textContent = `${inputName} is required`;
        error.style.display = 'block';
        valid = false;
      }
      // Email validation
      else if (inputName === 'email' && inputValue && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)) {
        group.classList.add('error');
        error.textContent = 'Please enter a valid email address';
        error.style.display = 'block';
        valid = false;
      }
      // Phone validation (optional but validate if provided)
      else if (inputName === 'phone' && inputValue && !/^[\d\s()+\-\.]{7,}$/.test(inputValue)) {
        group.classList.add('error');
        error.textContent = 'Please enter a valid phone number';
        error.style.display = 'block';
        valid = false;
      }
    });
    
    if (!valid) return;
    
    // Prepare payload
    const fd = new FormData(form);
    const phoneValue = (fd.get('phone')||'').toString().trim();
    const payload = {
      name:(fd.get('name')||'').toString().trim(),
      email:(fd.get('email')||'').toString().trim(),
      phone: phoneValue || null,
      message:(fd.get('message')||'').toString().trim(),
      source: fd.get('preferred_date') ? 'tour' : 'contact',
      preferred_date: fd.get('preferred_date')||null,
      preferred_time: fd.get('preferred_time')||null
    };
    
    // Disable submit button during processing
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    try { 
      await DataService.createLead(payload); 
      RFCEApp.showToast('Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
      form.reset();
      
      // Clear any tour summary if present
      const summaryContainer = document.querySelector('#tour-summary-container');
      if (summaryContainer) summaryContainer.style.display = 'none';
      
    } catch(err) { 
      console.error('Contact form error:', err);
      RFCEApp.showToast('Sorry, there was an error sending your message. Please try again or call us directly.', true);
    } finally {
      // Re-enable submit button
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
  
  // Clear errors on input
  form.querySelectorAll('.form-input, .form-textarea').forEach(input => {
    input.addEventListener('input', () => {
      const group = input.closest('.form-group');
      const error = group.querySelector('.form-error');
      
      // Always clear error state on input
      group.classList.remove('error');
      error.style.display = 'none';
      
      // Special handling for phone field - validate on input if not empty
      if (input.name === 'phone' && input.value.trim()) {
        const phoneValue = input.value.trim();
        if (phoneValue && !/^[\d\s()+\-\.]{7,}$/.test(phoneValue)) {
          group.classList.add('error');
          error.textContent = 'Please enter a valid phone number';
          error.style.display = 'block';
        }
      }
    });
  });
}

async function initAdmin(){
  if (!document.body.classList.contains('page-admin')) return;
  const login = document.querySelector('[data-admin-login]');
  const dash  = document.querySelector('[data-admin-dash]');
  async function refresh(){
    const { data: { user } } = await supa.auth.getUser();
    const admin = user ? await DataService.isAdmin() : false;
    if (login) login.style.display = admin ? 'none' : '';
    if (dash)  dash.style.display  = admin ? '' : 'none';
    if (admin) loadAdminImages();
  }
  login?.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const fd = new FormData(login);
    const { error } = await DataService.signIn(fd.get('email'), fd.get('password'));
    if (error) return alert(error.message);
    if (!(await DataService.isAdmin())) { await DataService.signOut(); return alert('Not an admin'); }
    refresh();
  });
  document.querySelector('[data-admin-logout]')?.addEventListener('click', async ()=>{ await DataService.signOut(); refresh(); });

  // Post form submit handler
  const postForm = document.querySelector('[data-admin-post]');
  
  // Initialize TagManager for the post form
  let tagManager = null;
  if (postForm) {
    const wrap = postForm.querySelector('[data-tags-input]');
    const entry = postForm.querySelector('[data-tags-entry]');
    const hidden = postForm.querySelector('[data-tags-hidden]');
    
    if (wrap && entry && hidden) {
      const tags = new Set();
      
      function render() {
        // Remove existing chips
        wrap.querySelectorAll('.tag-chip').forEach(chip => chip.remove());
        
        // Add chips for each tag
        Array.from(tags).forEach(tag => {
          const chip = document.createElement('div');
          chip.className = 'tag-chip';
          chip.dataset.value = tag;
          chip.innerHTML = `<span>${tag}</span><button type="button" class="tag-x" aria-label="Remove ${tag}">×</button>`;
          wrap.insertBefore(chip, entry);
        });
        
        // Ensure entry stays focused
        entry.focus();
      }
      
      function syncHidden() {
        hidden.value = Array.from(tags).join(',');
      }
      
      function add(value) {
        if (!value) return;
        // Split by comma or space, process each part
        const parts = value.split(/[,\s]+/);
        parts.forEach(part => {
          const trimmed = part.trim().toLowerCase();
          if (trimmed && trimmed.length > 0) {
            tags.add(trimmed);
          }
        });
        render();
        syncHidden();
      }
      
      function remove(value) {
        tags.delete(value);
        render();
        syncHidden();
      }
      
      // Entry field listeners
      entry.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ',') {
          e.preventDefault();
          add(entry.value);
          entry.value = '';
        } else if (e.key === 'Backspace' && entry.value === '') {
          const lastTag = Array.from(tags).pop();
          if (lastTag) remove(lastTag);
        }
      });
      
      entry.addEventListener('blur', () => {
        if (entry.value.trim()) {
          add(entry.value);
          entry.value = '';
        }
      });
      
      entry.addEventListener('paste', (e) => {
        e.preventDefault();
        const pastedText = (e.clipboardData || window.clipboardData).getData('text');
        add(pastedText);
        entry.value = '';
      });
      
      // Wrapper click listener for chip removal
      wrap.addEventListener('click', (e) => {
        if (e.target.classList.contains('tag-x')) {
          const chip = e.target.closest('.tag-chip');
          if (chip) {
            remove(chip.dataset.value);
          }
        }
      });
      
      tagManager = { add, remove, getTags: () => Array.from(tags) };
    }
  }
  postForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const fd = new FormData(postForm);
    const title = (fd.get('title') || '').toString().trim();
    
    // Client-side guard: Title is required
    if (!title) {
      alert('Please enter a title');
      return;
    }
    
    let slug = (fd.get('slug') || '').toString().trim();
    
    // Auto-generate slug if empty
    if (!slug) {
      slug = title
        .toLowerCase()
        .replace(/[\s_]+/g, '-')  // Replace spaces/underscores with '-'
        .replace(/[^a-z0-9-]/g, '')  // Remove non a-z, 0-9, or '-'
        .replace(/-+/g, '-')  // Collapse multiple '-'
        .replace(/^-+|-+$/g, '')  // Trim leading/trailing '-'
        .substring(0, 80);  // Limit to ~80 chars
    }
    
    // Build post object
    const post = {
      title,
      slug,
      status: 'published',
      published_at: new Date().toISOString()
    };
    
    // Add optional fields only if non-empty
    const excerpt = (fd.get('excerpt') || '').toString().trim();
    const body = (fd.get('body') || '').toString().trim();
    const coverPath = (fd.get('cover_path') || '').toString().trim();
    const tagsArray = tagManager ? tagManager.getTags() : [];
    
    if (excerpt) post.excerpt = excerpt;
    if (body) post.body = body;
    if (coverPath) post.cover_path = coverPath;
    if (tagsArray.length > 0) {
      post.tags = tagsArray;
    }
    
    try {
      await DataService.createPost(post);
      alert('Post created successfully!');
      postForm.reset();
      // Clear TagManager
      if (tagManager) {
        tagManager.getTags().forEach(tag => tagManager.remove(tag));
      }
    } catch (err) {
      alert(err.message || 'Failed to create post');
    }
  });

  const fileInput = document.querySelector('#adminUpload');
  const imgGrid   = document.querySelector('[data-admin-images]');
  fileInput?.addEventListener('change', async (e)=>{
    const f = e.target.files[0]; if(!f) return;
    try {
      const dest = (document.querySelector('input[name="imgDest"]:checked')?.value) || 'gallery';
      
      const result = await DataService.uploadImage(f, f.name, { category: dest });
      await loadAdminImages();
      
      // Show toast with copy-to-clipboard for storage path
      const toast = document.createElement('div');
      toast.className = 'upload-toast';
      toast.innerHTML = `
        <div>✅ Uploaded to ${dest}: ${f.name}</div>
        <div style="font-size:0.8em;margin-top:4px;">
          Path: <code>${result.path}</code>
          <button onclick="navigator.clipboard.writeText('${result.path}')" style="margin-left:8px;padding:2px 6px;font-size:0.7em;">Copy</button>
        </div>
      `;
      toast.style.cssText = `
        position:fixed;top:20px;right:20px;background:#4CAF50;color:white;
        padding:12px;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,0.2);
        max-width:350px;z-index:1000;font-size:0.9em;
      `;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 5000);
      
      alert('Uploaded successfully!');
    }
    catch(err){ alert(err.message); }
    e.target.value='';
  });
  async function loadAdminImages(){
    const imgs = await DataService.listImages();
    if (!imgGrid) return;
    imgGrid.innerHTML = imgs.map(i=>{
      const url = supa.storage.from('images').getPublicUrl(i.path).data.publicUrl;
      return `<figure><img src="${url}" alt="${i.alt||''}"><figcaption>${i.alt||''}</figcaption>
        <button class="btn btn--ghost" data-del-img data-id="${i.id}" data-path="${i.path}">Delete</button></figure>`;
    }).join('');
    imgGrid.querySelectorAll('[data-del-img]').forEach(b=>{
      b.onclick = async ()=>{ await DataService.deleteImage(b.dataset.id, b.dataset.path); await loadAdminImages(); };
    });
  }
  refresh();
}

// Home Hero Carousel with Supabase Images
async function initHomeHero() {
  if (!document.body.classList.contains('page-home')) return;
  
  const track = document.querySelector('[data-hero-track]');
  const dots = document.querySelector('[data-hero-dots]');
  const prevBtn = document.querySelector('[data-hero-prev]');
  const nextBtn = document.querySelector('[data-hero-next]');
  
  if (!track || !dots) return;
  
  let currentIndex = 0;
  let autoTimer = null;
  let isUserInteracting = false;
  
  try {
    // Fetch 12 most recent images from Supabase
    const { data: images, error } = await supa.from('images')
      .select('path, alt, created_at')
      .order('created_at', { ascending: false })
      .limit(12);
    
    if (error) throw error;
    if (!images || images.length === 0) return;
    
    // Convert to public URLs
    const slides = images.map(img => {
      const { data: { publicUrl } } = supa.storage.from('images').getPublicUrl(img.path);
      return {
        url: publicUrl,
        alt: img.alt || 'RFCE Community Image',
        path: img.path
      };
    });
    
    // Render slides
    track.innerHTML = slides.map((slide, index) => `
      <div class="carousel-slide ${index === 0 ? 'active' : ''}">
        <img src="${slide.url}" alt="${slide.alt}" loading="lazy" onerror="this.src='assets/img/fallback.jpg'">
      </div>
    `).join('');
    
    // Render dots
    dots.innerHTML = slides.map((_, index) => `
      <button class="carousel-indicator ${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Go to slide ${index + 1}"></button>
    `).join('');
    
    // Navigation functions
    function goToSlide(index) {
      if (index === currentIndex) return;
      
      // Update slides
      const allSlides = track.querySelectorAll('.carousel-slide');
      const allDots = dots.querySelectorAll('.carousel-indicator');
      
      allSlides[currentIndex]?.classList.remove('active');
      allDots[currentIndex]?.classList.remove('active');
      
      currentIndex = index;
      
      allSlides[currentIndex]?.classList.add('active');
      allDots[currentIndex]?.classList.add('active');
    }
    
    function nextSlide() {
      const nextIndex = (currentIndex + 1) % slides.length;
      goToSlide(nextIndex);
    }
    
    function prevSlide() {
      const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
      goToSlide(prevIndex);
    }
    
    function startAutoSlide() {
      if (autoTimer) clearInterval(autoTimer);
      autoTimer = setInterval(nextSlide, 4000);
    }
    
    function stopAutoSlide() {
      if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
      }
    }
    
    function handleUserInteraction() {
      isUserInteracting = true;
      stopAutoSlide();
      
      // Resume auto-slide after 8 seconds of no interaction
      setTimeout(() => {
        isUserInteracting = false;
        startAutoSlide();
      }, 8000);
    }
    
    // Wire up controls
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        handleUserInteraction();
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        handleUserInteraction();
      });
    }
    
    // Wire up dots
    dots.addEventListener('click', (e) => {
      const indicator = e.target.closest('[data-index]');
      if (indicator) {
        const index = parseInt(indicator.dataset.index);
        goToSlide(index);
        handleUserInteraction();
      }
    });
    
    // Pause on hover
    const carousel = track.closest('.about-carousel');
    if (carousel) {
      carousel.addEventListener('mouseenter', stopAutoSlide);
      carousel.addEventListener('mouseleave', () => {
        if (!isUserInteracting) {
          startAutoSlide();
        }
      });
    }
    
    // Start auto-slide
    startAutoSlide();
    
  } catch (error) {
    console.error('Failed to load hero carousel images:', error);
    // Fallback: hide carousel or show default content
  }
}

// Auto-init
document.addEventListener('DOMContentLoaded', ()=>{
  initHomeHero();
  initBlogList();
  initGallery();
  initContactForm();
  initAdmin();
});

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => RFCEApp.init());