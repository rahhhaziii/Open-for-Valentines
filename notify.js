<script>
function submitForm(answer) {
  const form = document.querySelector('form[name="yes-no-form"]');
  const input = form.querySelector('input[name="answer"]');
  input.value = answer;
  fetch('/', {
    method: 'POST',
    body: new FormData(form)
  }).then(() => {
    window.location.href = answer + '.html';
  }).catch((error) => console.error('Error:', error));
}
</script>