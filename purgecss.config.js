module.exports = {
    content: ['index.html', './assets/**/*.js', './assets/bootstrap/**/*.js'],
    css: ['./assets/bootstrap/bootstrap.css'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    safelist: [
        'img-fluid',
        'gallery-items-row',
        'row',
        'item-column',
        'mb-4',
        'col-12',
        'col-sm-6',
        'col-md-4',
        'col-lg-4',
        'col-xl-4',
        'modal',
        'fade',
        'modal-dialog',
        'modal-content',
        'modal-body',
        'mg-prev',
        'lightboxImage',
        'mg-next',
    ],
};
