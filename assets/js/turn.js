jQuery(window).bind('orientationchange', function(e) {
    switch (window.orientation) {
        case 0:
            $('.turnDeviceNotification').css('display', 'none');
            // The device is in portrait mode now
            break;

        case 180:
            $('.turnDeviceNotification').css('display', 'none');
            // The device is in portrait mode now
            break;

        case 90:
            // The device is in landscape now
            $('.turnDeviceNotification').css('display', 'block');
            $('.turnDeviceNotification').css('z-index', '1111');
            break;

        case -90:
            // The device is in landscape now
            $('.turnDeviceNotification').css('display', 'block');
            $('.turnDeviceNotification').css('z-index', '1111');
            break;
    }
});