let dialogues = [
  "You wake up in a dimly lit bar, disoriented and confused. Your head is pounding, and the only thing you have is a strange device you don’t know how to use. You look around, and the bartender catches your gaze.",
  "David - “Where am I?”",
  "You ask, your voice shaky.",
  "David - “And what is this?”",
  "You hold up the device.",
  "The bartender chuckles.",
  "Maine - “This is the Cyberscape, and you're at Helios Canteen. Welcome,”",
  "He says, wiping a glass.",
  "Maine - “That’s your HoloSql. You use it to write commands. Everything here is controlled by SQL, so you better get familiar with it fast.”",
  "You stare at him in confusion.",
  "Maine - “Never used SQL before? No worries,”",
  "The bartender shrugs.",
  "Maine - “You’ll figure it out as you go along. See down here?”",
  "He points to the bottom of the screen.",
  "Maine - “That’s your Data Grid. You can access it whenever you need information. Trust me, you’ll need it.”",
  "Maine - “Try pulling up your data. Since your name is Anon, use this query:", 
  "SELECT * FROM DENIZEN WHERE name = 'Anon';",
  "You enter the data into Holo-SQL, and your information is presented to you. You're shocked to see the large sum of credits you have, but you keep it to yourself.",
  "Maine - “Now, try pulling up the Netizens you’ve met.”",
  "You type out a simple command:",
  "SELECT * FROM DENIZEN;",
  "A list appears, detailing the people you’ve crossed paths with.",
  "A half-cyber woman sits next to you, watching the screen with interest.",
  "Lucy - “If you can’t remember anything, you should see a mind hacker,” she suggests. “They help with that.”",
  "She extends her hand.",
  "Lucy - “Name’s Lucy. From Mumbraxis, I’m a Medhack.”",
  "You nod, processing the information.",
  "David - “Let me add you to the database,” fingers moving across your SQLpad.",
  "INSERT INTO DENIZEN (netizen_id, name, nexus_id, gender, role, credits, status); VALUES (13, 'Lucy', 1, 'f', 'medhack', 0, 'neutral');",
  "Lucy - “Good. Now, let’s find you a mind hacker. There’s one I know who’s an ally of ours.”",
  "You search the database for allied mind hackers.",
  "SELECT * FROM DENIZEN WHERE role = 'mind hacker' AND status = 'neutral';", // This line will be styled
  "You find one match.",
  "Lucy - “I know him. I’ll take you there, but in exchange, you’ll buy me a drink.”",
  "You agree, and she leads you through the city to a dingy building.",
  "Lucy - “I’ll wait here, I owe him some credits, so I better not go in.”",
  "You head upstairs and find the mind hacker.",
  "Payup - “Hello Trash what bad memory you want to forget.”",
  "David - “I need help remembering,”",
  "Payup - “300 credits. Pay up first.”",
  "You transfer the credits to his account.",
  "UPDATE DENIZEN SET credits = credits - 300 WHERE netizen_id = 10;",
  "Payup - “Lay doen on the data bed”",
  "Satisfied, he hooks you up to a machine. Your mind floods with blurry images—neon lights, a city drenched in rain, a door with a nameplate: Dâvid Martinez. Suddenly, the memory fades, and you wake up sweaty.",
  "Payup - “300 only gets you so far.”",
  "David - “Can I do it again?”",
  "Payup - “Sure, but if you fry your brain, I’m not cleaning it up.”",
  "With this vague lead, you return ",
  "Lucy - “What did you find out?”",
  "David -i just saw neon lights and the name Dâvid Martinez on a door",
  "Lucy - “Why don’t you try searching for Dâvid Martinez?, You might know that perosn.”",
  "SELECT * FROM DENIZEN WHERE name = 'Dâvid Martinez';",
  "Lucy - “Nothing? Try just searching for the last name, ‘Martinez.’ That might do the trick.”",
  "SELECT * FROM DENIZEN WHERE name LIKE '%Martinez';",
  "David - “There are way too many Martinezes. What should we do now?”",
  "Lucy - “Hmmmm,Neon lights? That must be Ahametropolis. Narrow your search there.”",
  "SELECT * FROM DENIZEN d JOIN NEXUS n ON d.nexus_id = n.nexus_id WHERE d.name LIKE '%Martinez' AND n.name = 'Ahametropolis';",
  "David - “Ohh i found one result in Ahametropolis.Her name is Rebecca Martinez",
  "Lucy - “Let’s head to Ahametropolis, you’ll need a monorail pass, though.”",
  "Lucy - “There is usually some in the junkyard with no owners, try to find it there.”",
  "You check the junkyard for lost items and find an unclaimed tram card.",
  "SELECT * FROM ITEMS WHERE owner_id IS NULL;",
  "David - “Looks like I can claim this one. I will add it to my inventory.”",
  "Lucy - “Good, now go find that woman,I will wait for you at Helios you still own me a drink ”",
  "You travel to Ahametropolis, guided by your search results.",
  "You approach an apartment bathed in neon lights, searching for the nameplate that reads 'David Martinez.'",
  "You find the apartment and knock on the door, your heart racing as you wait, still reeling from everything that's happened.",
  "Rebecca - “Oh my god, you’re back!”",
  "She hugs you tightly. You are still in confusion.",
  "David - “Is your name Rebecca Martinez? I don’t remember anything. Can you tell me how you know me?”",
  "She steps back, her eyes glistening with tears.",
  "Rebecca - “Yes, I’m Rebecca Martinez. You’re my brother, Dâvid. A few days ago, you gave me a chip, told me to hide it, and then you disappeared.”",
  "She hands you the chip, and as it touches your hand, everything falls into place. The blurry memories, the fortune, the hiding—it all connects.",
  "You realize who you are: the most wanted thief in the city. Your wealth didn’t come from luck; it came from manipulating the data that runs the city.",
  "David - “Now it makes sense, the credits, the hiding... I was protecting myself.”",
  "Rebecca looks worried. “What are you going to do now?”",
  "Your mind races. The mind hacker knows too much. If word gets out, it’s over for you.",
  "David - “I need to change my name.”",
  "UPDATE DENIZEN SET name = 'David Martinez' WHERE name = 'Anon';",
  "David - “I need to tie up loose ends,”",
  "First, you check how much gold you’ve accumulated.",
  "SELECT SUM(credits) AS total_credits FROM DENIZEN WHERE netizen_id = 'anon';",
  "The number flashes: 2 million credits worth of gold, spread across hidden accounts.",
  "Next, you calculate the average wealth among your closest allies:",
  "SELECT AVG(credits) AS avg_credits FROM DENIZEN WHERE status = 'neutral';",
  "Finally, you issue the command that will silence the mind hacker forever:",
  "DELETE FROM DENIZEN WHERE name = 'Payup';",
  "The command executes, wiping his presence from the system. In Cyberscape, that’s as good as death.",
  "As you pocket the chip, you look up at the neon-lit sky. There’s no going back now. You’ve erased your past, but the city never forgets.",
  "David - “Let’s go, sister. This isn’t over. We’ve got more ground to cover.”"
];


let currentDialogueIndex = 0;
let isTyping = false;
const topBox = document.getElementById("topBox");
const davidDialogue = document.getElementById("davidDialogue");
const characterBox = document.getElementById("characterBox");
const characterName = document.getElementById("characterName");
const characterImage = document.getElementById("characterImage");
const characterDialogue = document.getElementById("characterDialogue");

function showDialogue() {
  if (currentDialogueIndex < dialogues.length) {
    const dialogue = dialogues[currentDialogueIndex];
    if (dialogue.includes("David")) {
      davidDialogue.innerHTML = dialogue.replace("David - ", "");
      characterDialogue.innerHTML = ""; // Clear the current character's dialogue
    } else if (dialogue.includes("Maine")) {
      characterName.innerHTML = "Maine";
      characterImage.src = "images/maine.png"; // Set Maine's image
      characterDialogue.innerHTML = dialogue.replace("Maine - ", "");
      davidDialogue.innerHTML = ""; // Clear David's dialogue
    } else if (dialogue.includes("Lucy")) {
      characterName.innerHTML = "Lucy";
      characterImage.src = "images/lucy.png"; // Set Lucy's image
      characterDialogue.innerHTML = dialogue.replace("Lucy - ", "");
      davidDialogue.innerHTML = ""; // Clear David's dialogue
    } else if (dialogue.includes("Payup")) {
      characterName.innerHTML = "Payup";
      characterImage.src = "images/payup.png"; // Set Payup's image
      characterDialogue.innerHTML = dialogue.replace("Payup - ", "");
      davidDialogue.innerHTML = ""; // Clear David's dialogue  
    } else if (dialogue.includes("Rebecca")) {
      characterName.innerHTML = "Rebecca";
      characterImage.src = "images/rebecca.png"; // Set Rebecca's image
      characterDialogue.innerHTML = dialogue.replace("Rebecca - ", "");
      davidDialogue.innerHTML = ""; // Clear David's dialogue  
    } else {
      topBox.innerHTML = dialogue;
    }
    
    // Special cases for specific transitions
    if (dialogue === "A half-cyber woman sits next to you, watching the screen with interest.") {
      characterName.innerHTML = "Lucy";
      characterImage.src = "images/lucy.png"; // Set Lucy's image
    } else if (dialogue === "“I’ll wait here, I owe him some credits, so I better not go in.”") {
      characterName.innerHTML = "Payup";
      characterImage.src = "images/payup.png"; // Set Payup's image
    } else if (dialogue === "As you pocket the chip, you look up at the neon-lit sky. There’s no going back now. You’ve erased your past, but the city never forgets.") {
      characterName.innerHTML = "Rebecca";
      characterImage.src = "images/rebecca.png"; // Set Rebecca's image
    }
    
    currentDialogueIndex++;
  } else {
    topBox.innerHTML = "The End.";
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (isTyping) {
      isTyping = false;
      topBox.innerHTML = dialogues[currentDialogueIndex - 1]; // Display the full dialogue
    } else {
      if (currentDialogueIndex < dialogues.length) {
        showDialogue();
      }
    }
  }
});

function openNewTab() {
  window.open("holo-sql.html", "_blank");
}

// Start displaying the dialogue
showDialogue();
