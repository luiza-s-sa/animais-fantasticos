export default
function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  if (!element.hasAttribute(outside)) {
    events.forEach(userEvent => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
    });
    element.setAttribute(outside, ''); // adicionamos um atributo ao elemento quando o evento for executado, para conseguir fazer uma verificação: se não existir o atributo, adicione o evento, se existir, não adicione. assim não fica aparecendo VÁRIOS eventos ali no 'Event Listeners', é adicionado só um
  };

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOutsideClick); // para remover o evento e não ficar aparecendo lá nos 'Event Listeners' do console. queremos remover o evento assim que o callback (a função que vai remover a classe 'active' do menu) for executada.
      });
      callback();
    }
  }
}
