"use strict";

let firstArtwork;
let secondArtwork;
let thirdArtwork;
let fourthArtwork;
let fifthArtwork;
let sixthArtwork;
let seventhArtwork;
let eighthArtwork;
let ninthArtwork;

document.addEventListener("DOMContentLoaded", init);

function init() {
  firstArtwork = document.getElementById("artwork1");
  secondArtwork = document.getElementById("artwork2");
  thirdArtwork = document.getElementById("artwork3");
  fourthArtwork = document.getElementById("artwork4");
  fifthArtwork = document.getElementById("artwork5");
  sixthArtwork = document.getElementById("artwork6");
  seventhArtwork = document.getElementById("artwork7");
  eighthArtwork = document.getElementById("artwork8");
  ninthArtwork = document.getElementById("artwork9");

  createFirstArt();
}

//first artwork
function createFirstArt() {
  for (let i = 100; i <= 300; i += 20) {
    let element = document.createElement("div");
    element.setAttribute("class", "box");
    element.style.width = `${i}px`;
    element.style.height = `${i}px`;
    firstArtwork.appendChild(element);
  }

  createSecondArt();
}

//second artwork
function createSecondArt() {
  for (let i = 0; i <= 90; i += 10) {
    let element = document.createElement("div");
    element.setAttribute("class", "box");
    element.style.transform = `rotate(${i}deg)`;
    secondArtwork.appendChild(element);
  }

  createThirdArt();
}

//third artwork
function createThirdArt() {
  for (let i = 0; i <= 200; i += 10) {
    let element = document.createElement("div");
    element.setAttribute("class", "circle");
    element.style.width = `${i}px`;
    element.style.height = `${i}px`;
    thirdArtwork.appendChild(element);
  }

  createFourthArt();
}

//fourth artwork
function createFourthArt() {
  for (let i = -90; i <= 90; i += 20) {
    let element = document.createElement("div");
    element.setAttribute("class", "box");
    element.style.transform = `translateX(${i}px) translateY(${i}px)`;
    fourthArtwork.appendChild(element);
  }

  createFifthArt();
}

//fifth artwork
function createFifthArt() {
  for (let i = 0; i <= 256; i += 32) {
    let element = document.createElement("div");
    element.setAttribute("class", "box");
    element.style.width = `${i}px`;
    element.style.height = `${i}px`;
    element.style.transform = `rotate(${i + 48}deg) skewY(${i / 8}deg)`;
    fifthArtwork.appendChild(element);
  }

  createSixthArt();
}

//sixth art
function createSixthArt() {
  for (let i = -20; i <= 45; i += 5) {
    let element = document.createElement("div");
    element.setAttribute("class", "circle");
    element.style.transform = `translateX(${i - 50}px) rotate(${i * 4}deg)`;
    sixthArtwork.appendChild(element);
  }

  createSeventhArt();
}

//seventh art
function createSeventhArt() {
  for (let i = 0; i <= 200; i += 10) {
    let element = document.createElement("div");
    element.setAttribute("class", "circle");
    element.style.width = `${i}px`;
    element.style.height = `${i}px`;
    element.style.transform = `translateX(${i}px) translateY(${-i / 2}px)`;
    seventhArtwork.appendChild(element);
  }

  createEighthArt();
}

//eighth art
function createEighthArt() {
  for (let i = 50; i <= 200; i += 10) {
    let element = document.createElement("div");
    element.setAttribute("class", "box");
    element.style.width = `${i}px`;
    element.style.height = `${i}px`;
    element.style.transform = `translateX(${i / 2}px) rotate(${i}deg)`;
    eighthArtwork.appendChild(element);
  }

  createNinthArt();
}

//ninth art
function createNinthArt() {
  for (let i = 50; i <= 200; i += 30) {
    let element = document.createElement("div");
    element.setAttribute("class", "box circle");
    element.style.width = `${i}px`;
    element.style.height = `${i}px`;
    ninthArtwork.appendChild(element);
  }
}
