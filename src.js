let jQuery = {}
;((jQuery) => {
  let foo = 'Hello'
  jQuery.bar = 'World!'
})(jQuery)
console.log(jQuery.bar) // World!
console.log(foo)
