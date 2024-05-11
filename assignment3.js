// 1. Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.

const statesInIndia = [
    "Andhra Pradesh",
    "Gujarat",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Karnataka",
    "Kerala",
    "Nagaland",
    "Odisha",
  ];
  
  const contVowel = (x) => {
    const fi_Letter = x.charAt(0).toLowerCase();
    return "aeiou".includes(fi_Letter);
  };
  
  const filteredState = statesInIndia.filter((state) => !contVowel(state));
  
  console.log(filteredState);

 // 2. let str = 'I love my India'
 // output expected = 'India my love I'

let str = "I love my India";
let words = str.split(" ");
let reverseWords = words.reverse();
let reverseString = reverseWords.join(" ");

console.log(reverseString);

// 3. let string = 'INDIA'
// output = 'INDONESIA'

let string = "INDIA";
let Arr = Array.from(string);
Arr.splice(3, 0, "O", "N", "E", "S");

let output = Arr.join("");
console.log(output);

// 4. Take any string with minimum 20 characters. Count number of consonant and vowel in the string.
let vowelCount = 0;
let consonantCount = 0;
const check = (x) => {
  for (i in x) {
    if ("aeiou".includes(x[i])) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  }
  return vowelCount, consonantCount;
};
check("abgyertiuosvbgsheaqw");
console.log(vowelCount, consonantCount);


// 5.  Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

function correctfn(string, wrong, correct) {
  let output;
  output = string.replace(wrong, correct);
  return output;
}
const correct = correctfn("He is a girl.", "He", "She");
console.log(correct);



// 6.inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.

const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
function checknum(num) {
  return num > 5;
}
let answer = inputArr.filter(checknum);
console.log(answer);



// 7.const students = [
// { name: "Ram", scores: [80, 70, 60] },
// { name: "Mohan", scores: [80, 70, 90] },
// { name: "Sai", scores: [60, 70, 80] },
// { name: "Hemang", scores: [90, 90, 80, 80] },
// ];
// Output = [
// { name: "Ram", average: 70 },
// { name: "Mohan", average: 80 },
// { name: "Sai", average: 70 },
// { name: "Hemang", average: 85 },
// ];
// Use array.map and array.reduce.

const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];
const outputs = students.map((student) => {
  const sum = student.scores.reduce((ac, score) => ac + score, 0);
  const avg = sum / student.scores.length;
  return { name: student.name, average: avg };
});
console.log(outputs);


// 8. Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.

function repeatedSum(x) {
  if (x < 10) {
    return x;
  }
  let sum = 0;

  while (x > 0) {
    sum += x % 10;
    x = Math.floor(x / 10);
  }

  return repeatedSum(sum);
}
let n = 456;
const a = repeatedSum(n);
console.log(a);


// 9. Write a function to count the number of words in a paragraph.

const countWord = (paragraph) => {
  const words = paragraph.split(/\s+/);

  return words.length;
};
const para ="Charles Babbage is the father of computers. It is an electronic gadget that is used to store and process data. The features which are found in a computer are a notepad, calculator, paint tool, etc.";
console.log(countWord(para));


// 10. Write a function to reverse a string.
// Input - Hello
// Outpur - olleH

const revStr = (x)=>{
    let n = x.length;
    let output = "";
    while(n--){
        output += x[n];
    }
    return output;
}
const str = revStr("Hello");
console.log(str);



// 11. Input
// [
//     student1: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student2: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student3: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     }
// ]

// Output: -
// [
//     student1: {
//         average: 44
//     },
//     student2: {
//         average: 44
//     },
//     student3: {
//         average: 44
//     }
// ]
// Write code to find average as mentioned above. Use array and object methods.

// Corrected structure using objects (associative array)
const arr = [
    {
        name: "student1",
        subjects: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        name: "student2",
        subjects: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        name: "student3",
        subjects: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

function calculateAvg(arr){
    const numSub = Object.keys(arr[0].subjects).length;
    const avgScores = [];


    arr.forEach(element => {
        const studentName = element.name;
        const subjects = element.subjects;

        let total = 0;

        Object.values(subjects).forEach(ele => {
            total += ele;
        });
        const avgScore = total / numSub;

        const studentObject = {
            [studentName]:{
                average: avgScore
            }
        };

        avgScores.push(studentObject);

    });
    return avgScores;

}

const averageScores = calculateAvg(arr);
console.log(JSON.stringify(averageScores, null, 4))