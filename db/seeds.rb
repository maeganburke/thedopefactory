# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Phrase.destroy_all

phrases_info = [
  {text: "George Bush doesn't care about black people."},
  {text: "I was never really good at anything except for the ability to learn."},
  {text: "We all self-conscious. I'm just the first to admit it."},
  {text: "People always say that you can't please everybody. I think that's a cop-out. Why not attempt it? 'Cause think of all the people you will please if you try."},
  {text: "Nothing in life is promised except death."},
  {text: "I'll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying."},
  {text: "If you have the opportunity to play this game of life you need to appreciate every moment. a lot of people don't appreciate the moment until it's passed."},
  {text: "This dark diction has become America's addiction."}
];

phrases_info.each do |phrase_info|
  Phrase.create!(phrase_info)
end
