import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
	const [isFocused, setIsFocused] = useState(false);

	const [note, setNote] = useState({
		title: '',
		content: ''
	});

	function handleChange(event) {
		const { name, value } = event.target;

		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value
			};
		});
	}

	function submitNote(event) {
		props.onAdd(note);
		setNote({
			title: '',
			content: ''
		});
		event.preventDefault();
	}

	function handleFocus() {
		setIsFocused(true);
	}

	return (
		<div>
			<form className="create-note">
				{isFocused && (
					<input
						name="title"
						onChange={handleChange}
						value={note.title}
						placeholder="Title"
						autoComplete="off"
					/>
				)}
				<textarea
					name="content"
					onChange={handleChange}
					value={note.content}
					onFocus={handleFocus}
					placeholder="Take a note..."
					rows={isFocused ? '3' : '1'}
				/>
				<Zoom in={isFocused}>
					<Fab onClick={submitNote}>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
