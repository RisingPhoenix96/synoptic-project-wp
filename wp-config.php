<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'synoptic-project' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'password' );

/** MySQL hostname */
define( 'DB_HOST', '192.168.0.122' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Xy/jK8CcBjd|ngVg&Wm8qezqrS:V8)$(rlG^|qqq(LtMo-hk}GiP)7t:UikP/uo]' );
define( 'SECURE_AUTH_KEY',  'MC%rke+xSzXO~<o;Xx}VB9.Y?N(GVUQ%HaNDE`$M+1sNUsxViqm-/eAfW^L:5;71' );
define( 'LOGGED_IN_KEY',    '}cu5|UyGgdh65CGq_PfPe,OI+-&tNkLo}{Y]-jj<DpG86AK*7NLmOD)^b8C|@/;L' );
define( 'NONCE_KEY',        '5ZTIlolp6O-#O/+*/N_U8Xeh$0szcWcA.AboFY[iu7{Jmbu)DCdE;0zbVFCDM|@L' );
define( 'AUTH_SALT',        'x9zu( 6Cz$A6%jMj(Z,:]vj3d^@k70Zh8rR2Mc!.]1M]ZxAu=_G%{q=77Xh,9(.r' );
define( 'SECURE_AUTH_SALT', 'T!uy8el*=@4YAjM^xU<;I+B5<]*2-!olOMBVR1>|ogN2:$[d}S(a2tso5$kB&6qe' );
define( 'LOGGED_IN_SALT',   'U{_!=05lM)N^3i^$R8@-6~>;7:gmhyCk_BBOvo.F@|^t|;i_y)#bEw,Eq?/G<)n1' );
define( 'NONCE_SALT',       'WmBDR`*rkuIH8P5eN9/OslIdzR=&+H5LJ|FpeVQ9@b2Dt+-&U|uS-;LvGAsRj;4R' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
