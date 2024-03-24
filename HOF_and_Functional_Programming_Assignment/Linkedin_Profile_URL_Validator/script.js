const btn = document.getElementById('btn');

const urlRegex = /https:\/\/www\.linkedin\.com*\/in\/[a-z]+[$&+,:;=?@#|'<>.^*()%!-][a-z]+[$&+,:;=?@#|'<>.^*()%!-0123456789]+/;

function checkUrlValidity() {
  const url = document.getElementById('url').value;
  if (urlRegex.test(url)) {
    alert(`${url} is a valid URL.`);
  } else {
    alert(`${url} is not a valid URL.`);
  }
}

btn.addEventListener("click", checkUrlValidity)