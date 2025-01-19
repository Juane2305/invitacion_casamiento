import React from "react";

const GoogleCalendarButton = () => {
  const title = "Casamiento Vale y Juampi";
  const details = "¡No olvides asistir a nuestro evento!";
  const location = "Salón Terra Oliva";
  const startDate = "20250406T130000"; // Formato: YYYYMMDDTHHmmssZ (UTC)
  const endDate = "20250407T000000";

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
    details
  )}&location=${encodeURIComponent(location)}&ctz=America/Argentina/Buenos_Aires`;

  return (
    <a
      href={googleCalendarUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="border-4 border-principal-dark py-3 px-8 rounded-full hover:transition bg-principal-dark text-white font-bold hover:bg-transparent hover:text-gray-700 hover:border-4 uppercase " 
    >
      Agregar al Calendario
    </a>
  );
};

export default GoogleCalendarButton;