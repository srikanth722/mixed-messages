/* Project: Mixed Messages
@author: Srikanth Srinivasan

Description: The purpose of this project is to write a message generator program. Every time a user runs the program, they will get a new, randomized output. To make the program truly random, the message that it outputs will be made up of at least three different pieces of data.
*/

// Set up data structure to store message components. We will use an object for this exercise.

let message = {
    _messageComponent1: ["Your shoes will make you happy today.", "Your ability for accomplishment will follow with success.", "Our deeds determine us, as much as we determine our deeds."],
    _messageComponent2: ["Everyone agrees you are the best.", "Land is always on the mind of a flying bird.", "Let the deeds speak."],
    _messageComponent3: ["When fear hurts you, conquer it and defeat it!", "You cannot love life until you live the life you love.", "Keep your eye out for someone special."],

    // Create a function to select a random message from an array

    selectRandMsg (arr) {
        let randIndex = Math.floor(Math.random() * arr.length);
        return arr[randIndex];
    },

    // Create a function to generate the random message by concatenating 3 outputs of the selectRandMsg function
    
    generateRandMsg () {
        console.log(`${this.selectRandMsg(this._messageComponent1)} ${this.selectRandMsg(this._messageComponent2)} ${this.selectRandMsg(this._messageComponent3)} `);
    }
};

// Invoke the generateRandMsg method from the message object to generate and display the mixed message.

message.generateRandMsg();


