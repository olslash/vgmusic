import React, { Component, PropTypes } from 'react';
import mui, { Paper, Table, Card, CardHeader, CardActions } from 'material-ui';
import { Player } from '.';

class PlayButton extends Component {
    render() {

    }
}

class Playlist extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.tracks !== this.props.tracks;
    }

    render() {
        const { tracks } = this.props;

        let idRowStyle = {
            textAlign: "left",
            paddingRight: 0
        };

        let trackList = tracks.map((track, index, tracks) => {
            return {
                id: {
                    "content": track.id + 1 + ".",
                    "style": idRowStyle
                },
                title: {
                    "content": track.title,
                },
                game: {
                    "content": track.game,
                }
            }
        });

        let headerColumns = {
            id: {
                content: "Track #",
                tooltip: "Track Number",
                style: {
                    width: "8%"
                }

            },
            title: {
                content: "Title",
                tooltip: "The tracks title",
            },
            game: {
                content: "Game",
                tooltip: "The game the track is from"
            }
        }

        let tableColumnOrder = ['id', 'game', 'title'];

        return (
            <div className="playlist-container">
                <Paper zDepth={1}>
                    <div>
                        <Table
                            rowData={trackList}
                            columnOrder={tableColumnOrder}
                            selectable={true}
                            displayRowCheckbox={false}
                            showRowHover={true}
                            preScanRowData={false}
                            canSelectAll={false}
                            multiSelectable={false}
                            displaySelectAll={false} />
                    </div>
                </Paper>
            </div>
        )
    }
}

Playlist.propTypes = {
    tracks: PropTypes.array.isRequired
};

export default Playlist;