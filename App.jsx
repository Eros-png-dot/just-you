import { useState } from "react";
{cat === "Diários de Gratidão" && (
<GratitudeDiary addNote={addNote} notes={gratitudeNotes} />
)}
</div>
))}
</div>
</div>
);
}


function AddPostForm({ categories, addPost }) {
const [title, setTitle] = useState("");
const [url, setUrl] = useState("");
const [category, setCategory] = useState(categories[0]);


return (
<div className="flex flex-col gap-2">
<input
placeholder="Título"
className="px-2 py-1 rounded text-black"
value={title}
onChange={(e) => setTitle(e.target.value)}
/>
<input
placeholder="URL (YouTube/MP3)"
className="px-2 py-1 rounded text-black"
value={url}
onChange={(e) => setUrl(e.target.value)}
/>
<select
className="px-2 py-1 rounded text-black"
value={category}
onChange={(e) => setCategory(e.target.value)}
>
{categories.map((c) => (
<option key={c}>{c}</option>
))}
</select>
<button
className="bg-green-500 px-3 py-1 rounded"
onClick={() => {
if (!title || !url) return alert("Preencha todos os campos!");
addPost(title, category, url);
setTitle("");
setUrl("");
}}
>
Adicionar
</button>
</div>
);
}


function GratitudeDiary({ addNote, notes }) {
const [note, setNote] = useState("");


return (
<div className="mt-4">
<textarea
placeholder="Escreva pelo que você é grato hoje..."
className="w-full p-2 rounded text-black"
value={note}
onChange={(e) => setNote(e.target.value)}
/>
<button
className="bg-blue-500 mt-2 px-3 py-1 rounded"
onClick={() => {
if (!note) return;
addNote(note);
setNote("");
}}
>
Salvar
</button>
<ul className="mt-2 list-disc list-inside">
{notes.map((n, i) => (
<li key={i}>{n}</li>
))}
</ul>
</div>
);
}
