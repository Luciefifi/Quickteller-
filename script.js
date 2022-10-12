
function returnHoroscope(e){
    e.preventDefault();

    let day=document.getElementsByName('day')[0].value
    let month=document.getElementsByName('month')[0].value
    if(month == 12 && day >= 22 && day <= 31 || month == 1 && day <= 19){
      alert('Capricon')
    }
    else if(month == 1 && day >= 20 && day <= 31 || month == 2 && day <= 18){
      alert('Aquarius')
    }
    else if(month == 2 && day >= 19 && day <= 28 && day <= 29 || month == 3 && day <= 20){
      alert('Pisces')
    }
    else if(month == 3 && day >= 21 && day <= 31 || month == 4 && day <= 19){
      alert('Aries')
    }
   else if(month == 4 && day >= 20 && day <= 30 || month == 5 && day <= 20){
      alert('Taurus')
    }
    else if(month == 5 && day >= 21 && day <= 31 || month == 6 && day <= 20){
      alert('Gemini')
    }
   else if(month == 6 && day >= 21 && day <= 30 || month == 7 && day <= 22){
      alert('Cancer')
    }
    else if(month == 7 && day >= 23 && day <= 31 || month == 8 && day <= 22){
      alert('Leo')
    }
   else if(month == 8 && day >= 23 && day <= 31 || month == 9 && day <= 22){
      alert('Virgo')
    }
   else if(month == 9 && day >= 23 && day <= 30 || month == 10 && day <= 22){
      alert('Libra')
    }
     else if(month == 10 && day >= 23 && day <= 31 || month == 11 && day <= 21){
      alert('Scorpio')
    }
   else if(month == 11 && day >= 22 && day <= 30 || month == 12 && day <= 21){
      alert('Sagittarius')
    }
  else
    {
      alert("INVALID DAY OR MONTH")
    }
  
}