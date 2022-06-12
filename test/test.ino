#include <Wire.h>
#include <ds3231.h>

struct ts t;
String Date = "";
String Hour = "";

void setup() {
  Serial.begin(115200);
  Wire.begin();
  DS3231_init(DS3231_CONTROL_INTCN);   
  t.hour=21; // hedhi bch tsalla7 el temps 
  t.min=18;
  t.sec=30;
  t.mday=09;
  t.mon=06;
  t.year=2022;
  DS3231_set(t);
}

void loop() {
}
