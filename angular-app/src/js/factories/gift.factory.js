angular
  .module('bestow')
  .factory('Gift', Gift);

Gift.$inject = ['API', '$resource'];

function Gift(API, $resource) {
  return $resource(
    `${API}/gifts/:id`,
    { id: '@_id' },
    {
      update: { method: 'PUT' }
    }
  );
}
