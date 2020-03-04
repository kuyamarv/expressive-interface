let brush = "red"

function setup() {

    // create a 640x480 pixel canvas and attach it to your HTML
    createCanvas(640, 480).parent('p5')
    print("this is the setup")
    background(200)

}

function draw() {

    if (mouseIsPressed) {

      if (brush == "red") {
        stroke(255, 0, 0)
        strokeWeight(3)
        line(pmouseX, pmouseY, mouseX, mouseY)
      }

      if (brush == "blue") {
        stroke(0, 0, 255)
        strokeWeight(3)
        line(pmouseX, pmouseY, mouseX, mouseY)
      }

      if (brush == "green") {
        stroke(0, 255, 0)
        strokeWeight(3)
        line(pmouseX, pmouseY, mouseX, mouseY)
      }

      if (brush == "yellow") {
        stroke(250, 250, 0)
        strokeWeight(3)
        line(pmouseX, pmouseY, mouseX, mouseY)
      }

      if (brush == "orange") {
        stroke(255, 135, 0)
        strokeWeight(3)
        line(pmouseX, pmouseY, mouseX, mouseY)
      }

      if (brush == "pink") {
        stroke(255, 80, 135)
        strokeWeight(3)
        line(pmouseX, pmouseY, mouseX, mouseY)
      }

      if (brush == "purple") {
        stroke(255, 0, 255)
        strokeWeight(3)
        line(pmouseX, pmouseY, mouseX, mouseY)
      }

      if (brush == "turquoise") {
        stroke(0, 255, 255)
        strokeWeight(3)
        line(pmouseX, pmouseY, mouseX, mouseY)
      }

      if (brush == "random") {
        stroke(random(0, 255), random(0, 255), random(0, 255))
        strokeWeight(3)
        line(pmouseX, pmouseY, mouseX, mouseY)
      }

      if (brush == "black") {
        stroke(0, 0, 0)
        strokeWeight(3)
        line(pmouseX, pmouseY, mouseX, mouseY)
      }

      if (brush == "white") {
        stroke(255, 255, 255)
        strokeWeight(3)
        line(pmouseX, pmouseY, mouseX, mouseY)
      }

      if (brush == "lines") {
        stroke(0, 0, 0, 80)
        strokeWeight(2)
        line(mouseX, mouseY, mouseX + random(-50, 50), mouseY + random(-50, 50))
      }

      if (brush == "spots") {
        noStroke()
        fill(random(255), random(255), 0, 100)
        circle(mouseX + random(-20, 20), mouseY + random(-20, 20), random(2, 30))
      }

      if (brush == "moreLines") {
        stroke(0)
        strokeWeight(1)
        line(mouseX - 20, mouseY - 20, mouseX + 20, mouseY + 20)
      }

      if (brush == "matrix") {
        stroke(0, 0, 50, 50)
        line(0, 0, mouseX, mouseY)
        line(width, 0, mouseX, mouseY)
        line(0, height, mouseX, mouseY)
        line(width, height, mouseX, mouseY)
      }

      if (brush == "erase") {
        stroke(200, 200, 200)
        strokeWeight(8)
        line(pmouseX, pmouseY, mouseX, mouseY)
      }

  }

  stroke(0)
  strokeWeight(1)

  fill(255, 0, 0)
  rect(10, 10, 30, 30)

  fill(0, 0, 225)
  rect(10, 50, 30, 30)

  fill(0, 255, 0)
  rect(10, 90, 30, 30)

  fill(255, 255, 0)
  rect(10, 130, 30, 30)

  fill(255, 135, 0)
  rect(10, 170, 30, 30)

  fill(255, 80, 135)
  rect(10, 210, 30, 30)

  fill(255, 0, 255)
  rect(10, 250, 30, 30)

  fill(0, 255, 255)
  rect(10, 290, 30, 30)

  fill(random(0, 255), random(0,255), random(0, 255))
  rect(10, 330, 30, 30)

  fill(0, 0, 0)
  rect(10, 370, 30, 30)

  fill(255, 255, 255)
  rect(10, 410, 30, 30)

  fill(0, 0, 0)
  rect(50, 10, 30, 30)

  fill(0, 0, 0)
  rect(50, 50, 30, 30)

  fill(0, 0, 0)
  rect(50, 90, 30, 30)

  fill(0, 0, 0)
  rect(50, 130, 30, 30)

  fill(200, 200, 200)
  rect(50, 170, 30, 30)

}


function mouseClicked() {

    print(int(mouseX), int(mouseY))

    if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40) {
      print("red button")
      brush = "red"
    }

    if (mouseX > 10 && mouseX < 40 && mouseY > 50 && mouseY < 90) {
      print("blue button")
      brush = "blue"
    }

    if (mouseX > 10 && mouseX < 40 && mouseY > 90 && mouseY < 130) {
      print("green button")
      brush = "green"
    }

    if (mouseX > 10 && mouseX < 40 && mouseY > 130 && mouseY < 170) {
      print("yellow button")
      brush = "yellow"
    }

    if (mouseX > 10 && mouseX < 40 && mouseY > 170 && mouseY < 210) {
      print("orange button")
      brush = "orange"
    }

    if (mouseX > 10 && mouseX < 40 && mouseY > 210 && mouseY < 250) {
      print("pink button")
      brush = "pink"
    }

    if (mouseX > 10 && mouseX < 40 && mouseY > 250 && mouseY < 290) {
      print ("purple button")
      brush = "purple"
    }

    if (mouseX > 10 && mouseX < 40 && mouseY > 290 && mouseY < 330) {
      print ("turquoise button")
      brush = "turquoise"
    }

    if (mouseX > 10 && mouseX < 40 && mouseY > 330 && mouseY < 370) {
      print ("random button")
      brush = "random"
    }

    if (mouseX > 10 && mouseX < 40 && mouseY > 370 && mouseY < 410) {
      print ("black button")
      brush = "black"
    }

    if (mouseX > 10 && mouseX < 40 && mouseY > 410 && mouseY < 450) {
      print ("white button")
      brush = "white"
    }

    if (mouseX > 50 && mouseX < 80 && mouseY > 10 && mouseY < 40) {
      print ("lines button")
      brush = "lines"
    }

    if (mouseX > 50 && mouseX < 80 && mouseY > 50 && mouseY < 90) {
      print ("spots button")
      brush = "spots"
    }

    if (mouseX > 50 && mouseX < 80 && mouseY > 90 && mouseY < 140) {
      print ("moreLines button")
      brush = "moreLines"
    }

    if(mouseX > 50 && mouseX < 80 && mouseY > 130 && mouseY < 190) {
      print ("matrix button")
      brush = "matrix"
    }

    if(mouseX > 50 && mouseX < 80 && mouseY > 170 && mouseY < 240) {
      print ("erase button")
      brush = "erase"
    }

}
