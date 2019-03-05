export function renderInput(label = '', float_ID = '', float_NAME = '', float_TYPE = 'text', float_AC = 'off') {
  // dummy for error display
  let inlineError = '';
  if (label.match(/([ar]st|ty)/gi)) {
    inlineError = `<span class="inline-error">Oops! There's a number in your ${label.toLowerCase()}.</span>`;
  }

  let inputElement = `
    <div class="floatContainer four">
      <input class="floatInput" id="${float_ID}" name="${float_NAME}" type="${float_TYPE}" autocomplete="${float_AC}"/>
      <label for="${float_ID}">${label}</label>
      ${inlineError}
    </div>
  `;

  return inputElement;
}
