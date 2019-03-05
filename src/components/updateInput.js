export function updateOnInput(event) {
  let $input = event.target;

  if (!$input.value) {
    $input.parentNode.classList.remove('floating');
  } else {
    $input.parentNode.classList.add('floating');
  }

  if ($input.parentNode.lastChild.previousSibling.classList.contains('inline-error')) {
    if ($input.value.match(/[0-9]/g)) {
      $input.parentNode.classList.add('error');
    } else {
      $input.parentNode.classList.remove('error');
    }
  }
}

// chaos for demo
// four > none > two > three
export function switchInputs() {
  document.querySelectorAll('.floatContainer').forEach(input => {
    if (input.classList.contains('four')) {
      input.classList.remove('four');
      input.classList.remove('three');
      input.classList.remove('two');
    } else if (input.classList.contains('three')) {
      input.classList.remove('three');
      input.classList.add('four');
    } else if (input.classList.contains('two')) {
      input.classList.remove('two');
      input.classList.add('three');
    } else {
      input.classList.add('two');
    }
  });
}
