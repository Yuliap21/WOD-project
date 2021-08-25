import React, { useState } from 'react';

export default function Home(props) {
	return (
		<div id="notesWrapper">
			<div className="notes">
				<div className="note">
					<div className="note-header">
						<span className="note-close">
							<i className="fas fa-times"></i>
						</span>
					</div>
					<div className="noteTitle">Title goes here</div>
					<div className="noteBody">Body goes here</div>
				</div>
			</div>
		</div>
	);
}
