
document.addEventListener('DOMContentLoaded', () => {

    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('is-active');
        }
    });

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    if (burger && nav) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('is-open');
            nav.classList.toggle('is-open');
        });
        nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
            burger.classList.remove('is-open');
            nav.classList.remove('is-open');
        }));
    }

    document.querySelectorAll('[data-slider]').forEach(wrapper => {
        const track = wrapper.querySelector('.slider');
        const prev = wrapper.querySelector('[data-prev]');
        const next = wrapper.querySelector('[data-next]');
        const bar = wrapper.querySelector('.slider-progress__bar');
        if (!track) return;

        const step = () => {
            const card = track.querySelector('.cat-card');
            return card ? card.offsetWidth + 28 : track.clientWidth;
        };

        const updateBar = () => {
            const max = track.scrollWidth - track.clientWidth;
            const visible = track.clientWidth / track.scrollWidth;
            const progress = max > 0 ? track.scrollLeft / max : 1;
            // ширина полоски: видимая часть + прокрученная доля остатка
            const width = (visible + (1 - visible) * progress) * 100;
            if (bar) bar.style.width = Math.max(width, 10) + '%';
        };

        prev && prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
        next && next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
        track.addEventListener('scroll', updateBar, { passive: true });
        window.addEventListener('resize', updateBar);
        updateBar();
    });

    document.querySelectorAll('.step__head').forEach(head => {
        head.addEventListener('click', () => {
            const step = head.closest('.step');
            const wasOpen = step.classList.contains('is-open');
            document.querySelectorAll('.step.is-open').forEach(s => s.classList.remove('is-open'));
            if (!wasOpen) step.classList.add('is-open');
        });
    });

    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');

    const applyFilter = (category) => {
        filterButtons.forEach(b => b.classList.toggle('is-active', b.dataset.filter === category));
        projects.forEach(p => {
            p.classList.toggle('is-hidden', category !== 'all' && p.dataset.category !== category);
        });
    };

    filterButtons.forEach(btn => btn.addEventListener('click', () => applyFilter(btn.dataset.filter)));

    if (filterButtons.length && location.hash) {
        const fromHash = location.hash.slice(1);
        if ([...filterButtons].some(b => b.dataset.filter === fromHash)) applyFilter(fromHash);
    }

    const modal = document.getElementById('modal');

    const openModal = () => {
        if (!modal) return;
        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        const firstInput = modal.querySelector('input');
        if (firstInput) setTimeout(() => firstInput.focus(), 300);
    };

    const closeModal = () => {
        if (!modal) return;
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
    };

    document.querySelectorAll('[data-modal-open]').forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    }));

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.closest('.modal__close')) closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
    }

    document.querySelectorAll('form.form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.classList.add('is-sent');
            form.reset();
        });
    });

    document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
});
