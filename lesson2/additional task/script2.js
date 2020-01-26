let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let curDay = week[6];

for( let i = 0; i < 7; i++) {

    if (week[i] == curDay && week[i] == 'Saturday' || week[i] == curDay && week[i] == 'Sunday') {
        document.write('<div>' + week[i].bold().italics() + '</div>' );
    } else if (week[i] == curDay ) {
        document.write('<div>' + week[i].italics() + '</div>' );
    } else if (week[i] != curDay && week[i] == 'Saturday' || week[i] != curDay && week[i] == 'Sunday') {
        document.write('<div>' + week[i].bold() + '</div>' );
    } else {
        document.write('<div>' + week[i] + '</div>' );
    }
}

let fig = ['545345345', '43534534', '34534534', '3454353', '559', '75465', '3589545'];


for (let i = 0; i < 7; i++) {
    if (fig[i].charAt(0) == '3' || fig[i].charAt(0) == '7') {
        console.log(fig[i]);
    }
}