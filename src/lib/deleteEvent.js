export default async function deleteEvent(eventId) {
  const response = await fetch(`http://localhost:3000/api/events/${eventId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete event");
  }

  return true;
}
