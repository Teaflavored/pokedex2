$(function () {
  window.JST = {};

  JST["pokemonDetail"] =
    _.template($("#pokemon-detail-template").html());

  JST["pokemonListItem"] =
    _.template($("#pokemon-list-item-template").html());

  JST["toyListItem"] =
    _.template($("#toy-list-item-template").html());

  JST["toyDetail"] =
    _.template($("#toy-detail-template").html());
  
  JST["pokemonEditDetail"] = _.template($("#pokemon-edit-detail-template").html())
});
