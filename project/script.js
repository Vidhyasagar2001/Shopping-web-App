// Function to handle mobile menu toggle
function myFunction(x) {
  x.classList.toggle("change");
  var nav = document.querySelector("nav");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

// Add event listener to the hamburger menu icon
var container = document.querySelector(".container");
container.addEventListener("click", function () {
  myFunction(this);
});

function inform1(){
  let para1 =  document.getElementById("info1")
  para1.innerText = "This a pack of 100 resistor of varying resistance values.A resistor is an electrical component that impedes the flow of electric current in a circuit. It is characterized by its resistance, measured in ohms (Ω). Resistors are commonly used to control current, adjust voltage levels, and limit power dissipation."
}
function inform2(){
  let para2 =  document.getElementById("info2")
  para2.innerText = "A capacitor is an electronic component that stores and releases electrical energy in a circuit. It consists of two conductive plates separated by an insulating material, known as a dielectric. Capacitors are characterized by their capacitance, measured in farads (F), and are commonly used for filtering, timing, energy storage, and coupling signals in electronic circuits."
}
function inform3(){
  let para3 =  document.getElementById("info3")
  para3.innerText = "A 5V DC motor is an electromechanical device that converts electrical energy into mechanical motion when powered by a direct current (DC) voltage of 5 volts. It typically consists of a rotor and a stator and operates based on the principles of electromagnetic induction. These motors are commonly used in various applications such as robotics, small appliances, and electronic devices for tasks requiring controlled rotation or movement."
}
function inform4(){
  let para4 =  document.getElementById("info4")
  para4.innerText = "Ultrasonic refers to sound frequencies above the range of human hearing, typically above 20 kHz. In technology, it often refers to ultrasonic waves used in various applications such as distance measurement, object detection, cleaning, and medical imaging. Ultrasonic sensors emit ultrasonic waves and measure the time it takes for the waves to reflect off an object and return, allowing for accurate distance calculations."
}
function inform5(){
  let para5 =  document.getElementById("info5")
  para5.innerText = "A PIR (Passive Infrared) sensor is a motion detection device that detects changes in infrared radiation within its field of view. It operates based on the principle that warm objects emit infrared radiation. When an object moves within the sensor's detection range, it causes a change in the infrared radiation pattern, triggering the sensor to output a signal. PIR sensors are commonly used in security systems, automatic lighting, and occupancy detection applications."
}
function inform6(){
  let para6 =  document.getElementById("info6")
  para6.innerText = "A BT (Bluetooth) module is a compact electronic device that enables wireless communication between electronic devices using Bluetooth technology. It facilitates the exchange of data over short distances, typically within a range of about 10 meters (30 feet). BT modules can be integrated into various electronic devices such as smartphones, tablets, computers, and microcontrollers, allowing them to communicate and interact with each other wirelessly. They are commonly used in applications such as wireless audio streaming, data transfer, remote control, and IoT (Internet of Things) devices."
}
function inform7(){
  let para7 =  document.getElementById("info7")
  para7.innerText = "An ESP32 Camera module is a compact hardware device based on the ESP32 microcontroller that integrates both Wi-Fi connectivity and a camera sensor. It allows for wireless communication and image capture capabilities in a single module. The ESP32 Camera module typically includes features such as onboard flash memory for storing images, GPIO pins for interfacing with external components, and support for various communication protocols. It is commonly used in projects requiring remote monitoring, surveillance, video streaming, and IoT applications where image capture and transmission are essential."
}
function inform8(){
  let para8 =  document.getElementById("info8")
  para8.innerText = "The Arduino Uno is a popular open-source microcontroller board based on the ATmega328P microcontroller. It features digital and analog input/output pins, onboard power regulation, and a USB interface for programming and communication with a computer. The Uno is widely used in electronics prototyping and DIY projects due to its ease of use, versatility, and large community support. It can be programmed using the Arduino Integrated Development Environment (IDE) and is compatible with a wide range of sensors, actuators, and shields, making it suitable for various applications including robotics, automation, and IoT."
}
function inform9(){
  let para9 =  document.getElementById("info9")
  para9.innerText = "Jumper wires are electrical wires with connectors on each end, typically used to create temporary connections between components on a breadboard or between different points on a circuit board. They are often made of flexible insulated wire, allowing for easy bending and insertion into various electronic components. Jumper wires are essential tools in electronics prototyping, facilitating the rapid assembly and testing of circuits without the need for soldering. They come in different lengths, colors, and connector types, providing flexibility and convenience in wiring projects."
}
function inform10(){
  let para10 =  document.getElementById("info10")
  para10.innerText = "A moisture sensor is an electronic device that measures the moisture content in a substance or environment. It typically consists of two electrodes or probes that detect changes in electrical conductivity caused by the presence of moisture. When the sensor comes into contact with moisture, the electrical conductivity between the electrodes changes, allowing the sensor to determine the moisture level. Moisture sensors are commonly used in agriculture, gardening, and industrial applications to monitor soil moisture levels, control irrigation systems, prevent overwatering, and detect water leaks. They are also utilized in consumer electronics for applications such as moisture detection in buildings, appliances, and electronic devices."
}
function inform11(){
  let para11 =  document.getElementById("info11")
  para11.innerText = "A 16x2 LCD (Liquid Crystal Display) is a type of alphanumeric display commonly used in electronic devices and projects. It consists of 16 characters per line and 2 lines, hence the name 16x2. These displays typically utilize liquid crystal technology to display characters or custom symbols in a readable format. They often come with built-in character sets and can display a range of characters, numbers, and symbols. 16x2 LCDs are commonly interfaced with microcontrollers or other electronic devices via parallel or serial communication protocols, allowing for the display of real-time information, sensor data, messages, and more. They are widely used in various applications such as digital clocks, temperature displays, measurement instruments, and DIY electronics projects."
}

