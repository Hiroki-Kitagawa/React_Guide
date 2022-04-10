function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Hiroki',
  lastName: 'Kitagawa'
}

const element = (<h1>Hello, {formatName(user)}!</h1>);

ReactDom.render(element, document.getElementById('root'));
