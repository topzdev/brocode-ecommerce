var form = $("#checkout-form").show();

form.steps({
    headerTag: ".checkout__bread",
    bodyTag: "section",
    enableAllSteps: true,
    startIndex: 2,
    // transitionEffect: "slideLeft",


    onStepChanged: function (event, currentIndex, priorIndex) {

    },


})



var paymentField = document.getElementById('field-method')

var paymentValue = document.getElementById('payment-value')

paymentField.addEventListener('click', e => {
    var target = e.target;



    if (target.getAttribute('data-method')) {
        Array.from(paymentField.children).forEach(item => {
            item.children[0].classList.remove('method-selected')
        })
        target.classList.add('method-selected')
    } else if (target.parentElement.getAttribute('data-method')) {
        Array.from(paymentField.children).forEach(item => {
            item.children[0].classList.remove('method-selected')
        })
        target.parentElement.classList.add('method-selected')
    }

    paymentValue.value = target.getAttribute('data-method') || target.parentElement.getAttribute('data-method')


})