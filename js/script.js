// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yoochan
// Created on: Apr 2024
// This file contains the JS functions for index.html
function ShowAnswer() {
  const number1 = parseFloat(document.getElementById("get_number1").value)
  const number2 = parseInt(document.getElementById("get_number2").value)
  let counter = 0
  let answer = 0
  while(counter != number1) {
    answer += number2
    counter ++
  }
  document.getElementById("TheAnswer").innerHTML = number1 + "x" + number2 + "=" + answer
} 