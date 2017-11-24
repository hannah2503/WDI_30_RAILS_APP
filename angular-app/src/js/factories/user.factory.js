angular
  .module('bestow')
  .factory('User', User);

User.$inject = ['API', '$resource'];
function User(API, $resource) {
  return $resource(`${API}/users/:id`, { id: '@_id'}, { update: { method: 'PUT' }
  });
}
