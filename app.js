let i = 10;
do {
    i--;
    console.log(i);1
} while (i > 10);



let count = 0;
while (count < 5) {
    if (count === 2) break;
    console.log(count);
    count++;
}

const fillCity = () =>{
    var cityName;
    var zipEntered = document.getElementById("zip").value; // Get the ZIP code entered by the user

    switch (zipEntered) {
        case "60608":
            cityName = "Chicago";
            break;

            case "000":
                cityName = "Karachi";
                break;

                case "1111":
                    cityName = "Islamabad";
                    break;
            
    }

    document.getElementById("city").value = cityName; // Set the city field's value

}