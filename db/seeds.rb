# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Phrase.destroy_all

phrases_info = [
  {text: "they'll always be haters, that's the way it is; hater niggas marry hater bitches and have hater kids"},
  {text: "they say people in your life are seasons and anything that happen is for a reason"},
  {text: "we buy our way out of jail, but we can't buy freedom"},
  # {text: "People always say that you can't please everybody. I think that's a cop-out. Why not attempt it? 'Cause think of all the people you will please if you try."},
  {text: "she couldn't afford a car so she named her daughter Alexis"},
  # {text: "I'll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying."},
  {text: "this dark diction has become America's addiction"}
];

phrases_info.each do |phrase_info|
  Phrase.create!(phrase_info)
end
