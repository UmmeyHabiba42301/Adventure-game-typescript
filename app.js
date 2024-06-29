#! /usr/bin/env node
import inquirer from "inquirer";
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 20;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 20;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "enter name"
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "select opponent",
        choices: ["Cattu", "honey", "bunny"]
    }
]);
let player1 = new Player(player.name);
let opponent1 = new Opponent(opponent.select);
do {
    //Cattu
    if (opponent.select == "Cattu") {
        let ask = await inquirer.prompt([{
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["fire", "water", "earth"]
            }]);
        if (ask.opt === "fire") {
            let num = Math.floor(Math.random() * 3);
            if (num > 0) {
                player1.fuelDecrease();
                console.log(`${player1.name} fuel is ${player1.fuel}`);
                console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
                if (player1.fuel <= 0) {
                    console.log(`you lose,try next time`);
                    process.exit();
                }
            }
            if (num <= 0) {
                opponent1.fuelDecrease();
                console.log(`${player1.name} fuel is ${player1.fuel}`);
                console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
                if (opponent1.fuel <= 0) {
                    console.log(`you win`);
                    process.exit();
                }
            }
        }
        if (ask.opt === "water") {
            player1.fuelDecrease();
            console.log(`you drnik water portion your fuel is ${player1.fuel}`);
        }
        if (ask.opt === "earth") {
            console.log(`you lose,try next time`);
            process.exit();
        }
    }
    //honey
    if (opponent.select == "honey") {
        let ask = await inquirer.prompt([{
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["fire", "water", "earth"]
            }]);
        if (ask.opt === "fire") {
            let num = Math.floor(Math.random() * 3);
            if (num > 0) {
                player1.fuelDecrease();
                console.log(`${player1.name} fuel is ${player1.fuel}`);
                console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
                if (player1.fuel <= 0) {
                    console.log(`you lose,try next time`);
                    process.exit();
                }
            }
            if (num <= 0) {
                opponent1.fuelDecrease();
                console.log(`${player1.name} fuel is ${player1.fuel}`);
                console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
                if (opponent1.fuel <= 0) {
                    console.log(`you win`);
                    process.exit();
                }
            }
        }
        if (ask.opt === "water") {
            player1.fuelDecrease();
            console.log(`you drnik water portion your fuel is ${player1.fuel}`);
        }
        if (ask.opt === "earth") {
            console.log(`you lose,try next time`);
            process.exit();
        }
    }
    //bunny
    if (opponent.select == "bunny") {
        let ask = await inquirer.prompt([{
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["fire", "water", "earth"]
            }]);
        if (ask.opt === "fire") {
            let num = Math.floor(Math.random() * 3);
            if (num > 0) {
                player1.fuelDecrease();
                console.log(`${player1.name} fuel is ${player1.fuel}`);
                console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
                if (player1.fuel <= 0) {
                    console.log(`you lose,try next time`);
                    process.exit();
                }
            }
            if (num <= 0) {
                opponent1.fuelDecrease();
                console.log(`${player1.name} fuel is ${player1.fuel}`);
                console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
                if (opponent1.fuel <= 0) {
                    console.log(`you win`);
                    process.exit();
                }
            }
        }
        if (ask.opt === "water") {
            player1.fuelDecrease();
            console.log(`you drnik water portion your fuel is ${player1.fuel}`);
        }
        if (ask.opt === "earth") {
            console.log(`you lose,try next time`);
            process.exit();
        }
    }
} while (true);
