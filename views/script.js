$(document).ready(function() {
  $('form[id="register_form"]').validate({
    rules: {
      first_name: "required",
      last_name: "required"
      /* fathers_name: "required",
      mothers_name: "required",
      email: {
        required: true,
        email: true
      },
      mobno: {
        required: true,
        maxlength: 10
      },
      wappno: "required",
      course: "required",
      branch: "required",
      tenthpercent: "required",
      twelfthpercent: "required",
      ugpercent: "required",
      pgpercent: "required",
      skills: "required",
      attachment: "required"*/
    },
    messages: {
      first_name: "You cannot leave this empty",
      mobno: {
        maxlength: "Phone no should be 10 characters long"
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});
//validating form
