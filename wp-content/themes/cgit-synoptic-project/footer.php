<?php if (!is_page_template('templates/home.php')) : ?>
    <footer>
        <div>
            <div class="page-wrap">
                <p class="site-footer-meta-company-info">Copyright © <?= date('Y') ?> <?= bloginfo() ?>. All rights reserved.</p>
            </div>
        </div>
    </footer>
<?php endif; ?>

<?php wp_footer() ?>

</body>

</html>