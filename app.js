(function() {
  function Validator(form) {
    this.form = form;
    this.fields = this.form.querySelectorAll("[required]");
    this.errors = [];

    if (!this.fields.length) return;

    this.form.onsubmit = function(e) {
      alert("herj");
    };
  }

  var validator1 = new Validator(document.querySelector("#form"));
})();
