const readlineSync = require('readline-sync');
const chalk = require('chalk');
var score =0;
var highScore=[
  {name: 'Tarun',
  score:12},
  {name: 'Abhinav',
  score: 12}
];
console.clear();
console.log(chalk.bgMagenta.italic ("Heyy Do you know about the startup world, Lets check how much\n Through a quiz"))
console.log(chalk.red('Instructions\nThere will be 1 point for each correct answer \nThere are total 12 questions\nIf you score 9+, you can get chance of a 5min conversation with our founder Mr. Harsh Porwal \nIf you score 12, then you can get a chance to meet our founder'))
var userName = readlineSync.question(chalk.bgBlue.underline('To begin please enter your Name '));
console.log(chalk.bgMagenta.italic('Welcome '+ userName)+ ' \nHere is the First question')
 
var allQuestions = [ 
{question: chalk.bgRed('1.From soonicorn to unicorn with the $410 million funding, He’s the Founder and CEO of Zomato, Who is he? '),
options: ['Ravi Nayak', 'Ashutosh Mishra', 'Vijendra Kedia', 'Deepinder Goyal'],
answer: 'Deepinder Goyal'},
{question:chalk.bgRed('2.Entry to the unicorn club and the launch of DocPrime, He’s the co-founder and CEO of Policy Bazzar, Who is he? '),
options: ['Ashish Dahiya', 'Vijay Kapoor', 'Yashish Dahiya', 'Sarvesh Sashi'],
answer: 'Yashish Dahiya'},
{question: chalk.bgRed('3.He created the most valuable edtech startup globally, He’s the founder of Byjus. Who is he? '),
options:['Ram Kapoor', 'Byju Raveendran', 'Mukesh ambani', 'Akash Ambani'],
answer:'Byju Raveendran'},
{question:chalk.bgRed('4.Securing $100 million funding in Series D and dominance in the gaming industry, They are the co-founders of Dream 11. Who are they? '),
options: ['Harsh Sheth and Bhavit Jain', 'Nithin Kamath and Nikhil Kamath', 'Varun Mayya and Shashank Updupa', 'Harsh Jain and Bhavit Sheth'],
answer: 'Harsh Jain and Bhavit Sheth'},
{question:chalk.bgRed('5.Launch of second fintech venture after successful first exit from freecharge, He’s the founder of Cred. Who is he? '),
options: ['Kunal Shah', 'Kunal Goswami', 'Vikas Shah', 'Nitin Srivastav'],
answer:'Kunal Shah'},
{question: chalk.bgRed('6.Dominance in the entertainment market and growth in non-entertainment business. He’s the co-founder and CEO of BookMyShow? '),
options: ['Vijay Shekar Sharma', 'Ashish Hemrajani','Vijay Malhotra', 'Gourav Kapoor'],
answer:'Ashish Hemrajani'},
{question: chalk.bgRed('7.He’s second on the list of India’s richest startup founders with a net worth of Rs. 14000 crore.Founder of "Media.net". Who is he? '),
options:['Divyank Turakhia', 'Divyank Tripathi', 'Kunal Shah', 'Tanay Pratap'], 
answer: 'Divyank Turakhia'},
{question:chalk.bgRed('8.At 26,He is the youngest member on the list of India’s richest startup founders under 40, Founder of Oyo. Who is he? '),
options: ['Varun Agarwal', 'Varun Kapoor','Ritesh Agarwal','Ritesh Soni'],
answer:'Ritesh Agarwal'},
{question: chalk.bgRed('9.He is number 15 on the list of the richest Indian startups under 40 with a net worth of Rs. 1400 crore. Founded Swiggy. Who is he? '),
options:['Karthik Nema', 'Kamal Hassan','Nilesh Pandey','Sriharsha Majety'],
answer:'Sriharsha Majety'},
{question:chalk.bgRed('10.She  is the only woman on the list. Having founded VU Technologies which manufactures televisions with a net worth of 1200 cr. Who is she? '),
options:['Adhira Bacchan', 'Aditi Goel', 'Manika Kefti','Devita Saraf'],
answer:'Devita Saraf'},
{question:chalk.bgRed('11.Founder of Rivigo, He is number 11 on the list with a net worth of Rs. 3200 crore. Who is he? '),
options:['Vijay Jain', 'Babloo Kapoor','Deepak Garg','Harshal Nirta'],
answer:'Deepak Garg'},
{question:chalk.bgRed('12 Sold their startup with a valuation of $21 billion, Sale netted them 7500cr each. They are the founders of Flipkart. Who are They? '),
options: ['Sachin Mheta and Binny Mheta','Sachin bansal and Binny bansal','Binny Jain and Sachin Jain', 'Sachin Tendulkar and Rohit Sharma'],
answer:'Sachin bansal and binny bansal'},
{question:chalk.bgRed('13.Top in the list of richest Indian startup founders, never raised venture capital and are now indias largest stock broker Zerodha. Who are they? '),
options:['Nilesh & Nitin Kamath', 'Nikhil & Nitesh Kamath', 'Nithin & Nikhil Kamath'],
answer:'Nithin & Nikhil Kamath'}
];
function startQuiz(question, answer){
  //  var answers = readlineSync.question(question);
 var answers = readlineSync.keyInSelect( allQuestions[i].options, allQuestions[i].question);
  if(allQuestions[i].answer === allQuestions[i].options[answers]){
    console.log(chalk.bgYellow('you are right'))
    score++;
  } else {
    console.log(chalk.bgGreen.black('you are wrong'))
  }
};
for(var i=0; i<allQuestions.length; i++){
  startQuiz(allQuestions[i].question, allQuestions[i].answer);
}
if(score > highScore[0].score || score > highScore[1].score ){
  console.log(chalk.bgRedBright('Very, Very Congratulations You have beaten the high score and You have got a chance to meet Mr Kunal Shah, Please send your screenshot to pr@kunalshah.com'))
}else if(score >=9 && score<12){ 
console.log(chalk.bgYellowBright.black('Congratulations You are eligible for a one to one talk with our founder, Please send the screenshot at pr@kunalshah.com'))
}else {
  console.log(chalk.bgBlue('Your Score is only '+ score))
};
