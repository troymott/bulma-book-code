// Getting all the modals, close and trigger buttons

var modals = document.querySelectorAll('.modal');
var modalButtons = document.querySelectorAll('.open-modal-button');
var modalClose = document.querySelectorAll('.close-modal-button');

// For Success Message Notification
var successMessages = document.querySelectorAll('.modal-success-notification');

if (modalButtons.length > 0) {
    modalButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.getElementById(this.dataset.target).classList.add('is-active');
        });
    });
}
if (modalClose.length > 0) {

    modalClose.forEach(closeButton => {
        closeButton.addEventListener('click', function() {
            modals.forEach(modal => {
                modal.classList.remove('is-active');
                // hiding success notification on closing the modal
                successMessages.forEach(message => {
                    message.classList.add('is-hidden');
                });
            });

        });
    });
}
// For Showing the Success Notification
var sendBugReport = document.querySelector('.send-bug-report');
if (sendBugReport !== null) {
    sendBugReport.addEventListener('click', function() {
        successMessages.forEach(message => {
            message.classList.remove('is-hidden');
        });
    });
}

// for delete an item
var deleteItem = document.querySelectorAll('.delete-item');
if (deleteItem.length > 0) {
    deleteItem.forEach(button => {
        button.addEventListener('click', function() {
            button.closest('.column').remove();

        });
    })
}

//for deleting a user
var deleteUserButton = document.querySelectorAll('.delete-user');
if (deleteUserButton.length > 0) {
    deleteUserButton.forEach(button => {
        button.addEventListener('click', function() {
            button.closest('tr').remove();

        });
    });
}

// Mobile Menu Toggle

var burger = document.querySelector('.burger');
var menu = document.querySelector('.navbar-menu')
if (burger !== null) {
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');

    });
}

// Dropdowns


var dropdowns = document.querySelectorAll('.dropdown:not(.is-hoverable)');
if (dropdowns.length > 0) {
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', event => {
            event.stopPropagation();
            dropdown.classList.toggle('is-active');
        });
    });

    document.addEventListener('click', event => {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('is-active');
        });
    });
}

var closeNotification = document.querySelectorAll('.close-notification');

if (closeNotification.length > 0) {
    closeNotification.forEach(closeIcon => {
        closeIcon.addEventListener('click', () => {

            closeIcon.closest('.notification').remove();
        });
    });
}