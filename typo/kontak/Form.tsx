"use client"
import React, { useState } from "react";
import { Button } from "../Button";

const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappNumber = "+6282213796408"; // Ganti dengan nomor WhatsApp tujuan

    const messageText = `
Name: ${name}
Message: ${message}
`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      messageText
    )}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="max-w-md w-full my-10 bg-white p-5 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-5">Buat Janji atau Hubungi Kami</h2>
      <p className="py-2 text-secondary">Silahkan isi formulir ,lalu anda akan langsung di arahkan ke WhatsApp Kami</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-medium">
            Pesan
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          <Button>Send Message</Button>
        </button>
      </form>
    </div>
  );
};

export default Form;