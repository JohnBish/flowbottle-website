/*
* Ultrasonic Sensor HC-SR04 and Arduino Tutorial
*
* Crated by Dejan Nedelkovski,
* www.HowToMechatronics.com
*
*/
// defines pins numbers
const int trigPin = 6;
const int echoPin = 7;
// defines variables
long duration;
int distance;
int volume;
void setup() {
pinMode(trigPin, OUTPUT); // Sets the trigPin as an Output
pinMode(echoPin, INPUT); // Sets the echoPin as an Input
Serial.begin(9600); // Starts the serial communication
}
void loop() {
// Clears the trigPin
digitalWrite(trigPin, LOW);
delay(2000);
// Sets the trigPin on HIGH state for 10 micro seconds
digitalWrite(trigPin, HIGH);
delayMicroseconds(10);
digitalWrite(trigPin, LOW);
// Reads the echoPin, returns the sound wave travel time in microseconds
duration = pulseIn(echoPin, HIGH);
// Calculating the distance
distance= (duration*0.034/2);
//600ml waterbottle
//volume = (600-(((duration*0.0034/2)*(3.0*3.0)*3.1415926)/411)*600);
volume = 650 - distance*10.3*PI;
// Prints the distance on the Serial Monitor
Serial.print("Distance: ");
Serial.println(distance);
/*Serial.print("Volume: ");
Serial.println(volume);*/
}

