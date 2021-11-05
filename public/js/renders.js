function renderTable(target, data, fields) {
  const $elem = document.querySelector(target);

  const $table = document.createElement('table');
  const $thead = document.createElement('thead');
  const $tbody = document.createElement('tbody');
  const $trHead = document.createElement('tr');

  $elem.innerHTML = '';

  $table.classList.add('table');
  $table.classList.add('is-hoverable')
  $table.classList.add('is-fullwidth')

  fields.forEach(field => {
    const $th = document.createElement('th');
    $th.innerHTML = field;
    $trHead.appendChild($th);
  });

  data.forEach(line => {
    const $tr = document.createElement('tr');

    fields.forEach(field => {
      const $td = document.createElement('td');
      $td.innerHTML = line[field];
      $tr.appendChild($td);
    });

    $tbody.appendChild($tr);
  });


  $thead.appendChild($trHead);
  $table.appendChild($thead);
  $table.appendChild($tbody);

  $elem.appendChild($table);
}

function renderElement(target, data) {
  const $elem = document.querySelector(target);

  $elem.innerHTML = '';

  const fields = Object.keys(data);

  const $ul = document.createElement('ul');

  fields.forEach(field => {
    const $li = document.createElement('li');
    $li.innerHTML = `<strong>${field}:</strong> ${data[field]}`;
    $ul.appendChild($li);
  });

  $elem.appendChild($ul);
}

function renderError(target, data) {
  const $elem = document.querySelector(target);

  $elem.innerHTML = '';

  const $article = document.createElement('article');
  const $mesageHeader = document.createElement('div');
  const $headerContent = document.createElement('p');

  $article.classList.add('message');
  $article.classList.add('is-danger');

  $mesageHeader.classList.add('message-header');
  $headerContent.innerHTML = 'An error ocurred:';

  $mesageHeader.appendChild($headerContent);

  const $mesageBody = document.createElement('div');

  $mesageBody.classList.add('message-body');
  $mesageBody.innerHTML = data;

  $article.appendChild($mesageHeader);
  $article.appendChild($mesageBody);

  $elem.appendChild($article);
}
