let store = {drivers: [], passengers: [], trips: []};



let driverId = 0;
class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter( trip => {
        return trip.driverId === this.id; });
   }

   passengers() {
     const ids = this.trips().map( t => t.passengerId )
     const passengers = [];
     for(var p of store.passengers) {
       if (ids.includes(p.id)) {
         passengers.push(p);
       }
    }
     return passengers;
   }

}




let passengerId = 0;
class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter( t => {
      return t.passengerId === this.id;
    })
  }

  drivers() {
     const ids = this.trips().map( t => t.driverId )
     const drivers = [];
     for(var d of store.drivers) {
       if (ids.includes(d.id)) {
         drivers.push(d);
       }
    }
     return drivers;
   }


}



let tripId = 0;
class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    if (passenger) { this.passengerId = passenger.id; };
    if (driver) { this.driverId = driver.id; };
    store.trips.push(this);
  }

  passenger() {
    return store.passengers.find( p => {
     return p.id === this.passengerId;
   });
  }

  driver() {
    return store.drivers.find( d => {
     return d.id === this.driverId;
   });
  }

}
