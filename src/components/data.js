import { isIterable } from "core-js";



let intros = ['As Christmas approaches', 'After a divorce', "Frazzled and struggling with writer's block"];

let profession = ['market researcher ','TV producer ','interim school superintendent ','music teacher', 'event planner', 'IT guy', 
                  'aspiring crafter ','big city new CEO ', 'Chicago-based business executive', 'professional retail designer', 'local music promoter',
                  'local contractor ','novelist ','former professional ice skater ','tavern owner ', 'sous chef ','out of work aspiring fashion designer ',
                  'personal assistant ', 'superstar quarterback ', 'party planner ','successful matchmaker ','struggling writer '];

let female_names =['Joy', 'Eve', 'Ellie','Laurel', 'Lisa','Samantha','Katie','Darcy','Stacy','Ellie', 'Heather','Emma',
'Olivia','Ava','Isabella','Sophia','Mia','Charlotte','Amelia','Evelyn','Abigail','Harper','Emily','Elizabeth','Avery','Sofia','Ella','Madison',
'Scarlett','Victoria','Aria','Grace','Chloe','Camila','Penelope','Riley','Layla','Lillian','Nora','Zoey','Mila','Aubrey','Hannah','Lily',
'Addison','Eleanor','Natalie','Luna','Savannah','Brooklyn','Leah','Zoe','Stella','Hazel','Ellie','Paisley','Audrey','Skylar','Violet','Claire',
'Bella','Aurora','Lucy','Anna','Samantha','Caroline','Aaliyah','Kennedy','Kinsley','Allison','Maya','Sarah','Madelyn','Jennie'];
let male_names = ['Liam', 'Nick','Clay','Kevin','Danny'];

let adjectives = ['adventurous', 'difficult', 'angry', 'expensive', 'cheap','jealous','lonely','lively','energetic','tired','thankful','funny','gifted',
                'cute','curious','crazy','creepy','clever','beautiful','graceful','plain','happy','poor','shy','average','attractive','arrogant','evil',
                'fancy','lonely','lucky','busy','careful','cautious','gifted','old-fashioned','vivacious','proud','nervous','obnoxious','curious',
                'gorgeous','perfect','powerful','healthy','helpful','handsome','cute','dark'];

let verbs = ['goes', 'takes','comes','wants','thinks','gives','asks','leaves','tries','works','calls','eats','opens','pushes','plays','sends','sings',
            'smiles','grabs','hops','shops','smiles','thinks','listens','jumps','laughs','shouts','talks','reads','rides','touches','buys',
            'cries','helps','bakes','hits','exits','spends','stands','visits','waits','walks','dreams','drinks','builds','goes','falls','yells',
            'sings','opens','helps','writes','votes','enters','exits','helps','leaves','listens','reads','rides','moves','sits'];

let happening = ['is sent to a small town to organize a festival', 'is about to get a sweet promotion just in time for the holidays', 'is producing a Christmas Special',
                "travels to Memphis to secure one of the city's oldest family-owned banks",'takes a last-minute Christmas trip to her hometown of Evergreen',
                "heads home to her late grandmother's home to spend Christmas",'is hired by the king of San Senova, Alexander, to help his daughter in a Christmas ice skating performance.',
                "plans to demolish her great aunt's Gilded Age estate and replace it with a golf course", 'takes advice from the notes that are left by a mysterious "Handyman"',
                'returns to her hometown to spend the summer with her daughter and mother',"she signs up for the town's annual barbecue competition",
                'has suddenly lost the spark in her own marriage','is forced to fake a relationship to save her career']; 
 
let buts = ['finds a billionaire in the process','she receives an urgent phone call from home and rushes back to help her Aunt recover from surgery', 'a meteor strikes the earth',
            'a transit strike ruins her plans', 'she discovers she has a long lost twin', 'a snowstorm strands her at the airport'
            ]                
let vague_words = ['vaguely', 'obscurely','indistinctly', 'darkly','remarkably','dimly', 'slightly', 'barely','impalpably','hazily']

let mythical_creatures = ['fairy', 'angel', 'elf', 'imp','leprechaun','sprite', 'Santa', 'Santa-esque', 'ghost', 'spirit', 'grand mother','great aunt', 'grand father', 'former teacher', 'old track coach', 'former football coach'];

let nationality = ['Afghan','Albanian',	'Algerian','American', 'Andorran','Angolan','Anguillan','Armenian',	'Australian','Austrian', 'Azerbaijani',
'Bahamian',	'Bahraini',	'Bangladeshi',	'Barbadian', 'Belarusian','Belgian','Belizean','Beninese','Bermudian','Bhutanese', 'Bolivian','Botswanan',
'Brazilian','British','Bruneian','Bulgarian','Burmese','Burundian','Cambodian','Cameroonian','Canadian','Central African','Chilean', 'Chinese',	'Colombian',
'Congolese','Costa Rican','Croatian','Cuban', 'Czech', 'Danish', 'Djiboutian','Dominican','Dutch','Ecuadorean','Egyptian','English','Equatorial Guinean',
'Eritrean','Estonian','Ethiopian','Faroese','Fijian','Filipino','Finnish','French','Gabonese','Gambian','Georgian',	'German', 'Ghanaian','Greek','Greenlandic',
'Guatemalan','Guyanese','Haitian','Honduran','Hungarian','Icelandic','Indian','Indonesian','Iranian','Iraqi','Irish','Italian', 'Jamaican',	'Japanese','Jordanian', 
'Kazakh','Kenyan', 'Latvian','Lebanese','Lithuanian','Macedonian','Mexican','Moldovan',	'Moroccan','North Korean','Norwegian','Peruvian','Polish','Portuguese',
'Puerto Rican', 'Romanian',	'Russian','Salvadorean','Samoan','Scottish','Slovak', 'Spanish','Swedish','Swiss','Thai','Ukrainian','Venezuelan','Vietnamese',
'Welsh','Zimbabwean'];
let all_cat = [intros, profession,female_names,male_names,adjectives, verbs, happening, buts,vague_words,mythical_creatures,nationality];

export default all_cat;

// {name one}, a {job},{has} but {but}. Then she {verb} {Name 2}, a {adjective} {job}. With the help of a {vaguely word} {nationality} {mythical creature}, {Name One} finds love where she least expects isIterable.
// , an   but  of selling the estate she hoped to use as a venue. Before long, the unlikely pair begins falling for each other.


//  . But , reuniting with her former crush, Ben.


// A   for the 5th year but she is then told to co-produce it with the host's son. Initially, she's not too happy about it but - Christmas brings friends and families together.

// As   trims budgets. Her handsome neighbor Liam is a  and Eve feels his program must be cut. 
// But luckily her friend is married to an , who's created a website for donations directly to save the Arts program. Launched during 
// the tree lighting ceremony, where Liam's students will perform, the website could provide the Christmas miracle the town needs. 
// Already the Universe is cooperating. Eve is back home and she, Liam and his daughter look like they might be celebrating many a future Christmas

// , an  working in her small town's bakery shows Nick Carlingson --the  during his visit to the bakery's main floor-- 
// that it's people and not machines that make the business a success.

// A  . While in Memphis, 
//  reunites with an old flame Clay, a  with loftier aspirations.

// When (Wagner) , she finds that the historic 
// general store has been closed. Using her skills as a , Lisa decides to keep local 
// tradition alive and help the good people of Evergreen bring the store back to life. As Lisa charms a  
// named Kevin (Deklin) into working with her, the pair find themselves facing one surprise after another as they restore 
// the store to its former glory. When the staff at the Kringle Kitchen temporarily accept the store's beloved 'Mailbox to Santa' 
// for safekeeping, the townspeople find and rally around a mysterious 25-year-old letter that never made it to the North Pole. 
// As old traditions are made new again, Lisa finds herself falling for Kevin, the traditions, and the town of Evergreen.

// ,   (Deloach), along with her boyfriend, 
// heads home to her late grandmother's home to spend Christmas. While at home with family, her grandmother's 
// wise words reveal the true meaning of Christmas with Samantha at a time when she most needs encouragement.

// , a  (Patterson), is  As Katie spends time in the castle and with the king, she and Alex begin to develop feelings for 
// each other and ultimately fall in love. But will the tradition-loving people of San Senova allow their king to make a foreigner their queen?


//  (Chabert) started her own company, rather than work with her father. Returning to her hometown for Christmas, 
// Darcy reconnects with an old rival from high school,  Luke (Penny).Darcy's mother has them plan a charity event together. 
// As Darcy and Luke plan the event, she is trying to find what age wants in life. Based on the book of the same title by Melissa de la Cruz. 

// , a type-a planner with a penchant for schedules, takes a spontaneous trip to the charming land of Belgravia 
// at the encouragement of her  and best friend, Kevin. While preparing for the Royal Christmas Baking Contest, 
// Stacy finds herself faced with an identical stranger, and a strange request. Free-spirited but royally obligated, 
// Duchess Margaret Delacourt wants nothing so much as one last chance to experience life as a "normal person" before 
// she dutifully marries the crown Prince of Belgravia. Stacy can give her that wish. From questionable equestrian 
// skills and the true meaning of charity to slipping accents and snowball fights, this is an adventure that no holiday romantic should miss.

//  is an  who lands a job as a  to  Danny Holland. Holland's been sidelined with an injury and the last thing he wants is a female assistant,
//  particularly one who knows nothing about football. But the two opposites strike a bargain and agree to work together on a trial basis. While Laurel struggles 
// to master her job, knowing she's in way over her head, Danny struggles to maintain his star image even though he's 
// concerned his injury might impact his career. Things get even more complicated when employer and employee start 
// to notice there's more to the other than meets the eye - and what they find is love on the sidelines

// When Lucy Windsor's (Amanda Schull) childhood sweetheart plans to demolish her great aunt's Gilded Age estate and 
// replace it with a golf course, she fights to preserve it. As they set out to find a compromise, they learn that 
// embracing the past may be the key to protecting the future.

// A young woman  when a sales rep arrives with plans to buy her family's winery.

//  a woman . At her daughter's urging, , where she runs into her high school sweetheart. Old feelings resurface as 
// they spend time together, but she convinces herself that she has no time for distractions when there's a competition to win.

//  has been painstakingly planning her sister's destination wedding for the longest time. As guests arrive on a beach paradise, Ellie runs into her ex-boyfriend, Greg, who also happens to be the best man. When the bride and groom don't show up, Ellie and Greg must lie to the guests and assure everything is okay. With the wedding a couple days away, and Ellie unsure if her sister will show up, she and Greg must save the wedding while simultaneously falling for each other.

// "With only one week to prepare, Mia Pearson (Adelaide Kane) and her family of s are given the biggest job in their company's history: a New Year's Eve party for tech entrepreneur Kate Clark (Pauline Egan). But when her brother breaks his leg and her parents head off on a planned vacation, Mia must reluctantly enlist the help of her brother's visiting college buddy, David Campos (Carlos PenaVega), to help her pull off the event which just so happens to fall on her favorite day of the year. But what Mia didn't plan on was falling in love in the process."

// A   after 15 years, so  insists her husband, Ian, to go on a blind date-with her. By rediscovering each other as "newly-mets," they get a second chance to fall in love for the first time all over again.



// A  , while overlooking the love of a longtime friend.






