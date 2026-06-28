<script>
const otherCheckbox = document.getElementById("otherLanguage");
const otherText = document.getElementById("otherText");

otherCheckbox.addEventListener("change", function () {

    if (this.checked) {
        otherText.disabled = false;
        otherText.required = true;
        otherText.focus();
    } else {
        otherText.disabled = true;
        otherText.required = false;
        otherText.value = "";
    }

});
</script>