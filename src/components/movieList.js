import React from "react";
import MovieDetail from "./movieDetail";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./movieList.css";

import {
  FormattedDate,
  FormattedNumber,
  FormattedPlural,
  FormattedMessage,
} from "react-intl";

const MovieList = (props) => {
  return (
    <React.Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>
              <FormattedMessage id="Name" />
            </th>
            <th>
              <FormattedMessage id="DirectedBy" />
            </th>
            <th>
              <FormattedMessage id="Country" />
            </th>
            <th>
              <FormattedMessage id="Budget" />
            </th>
            <th>
              <FormattedMessage id="Release" />
            </th>
            <th>
              <FormattedMessage id="Views" />
            </th>
          </tr>
        </thead>
        <tbody>
          {props.movies.map((movie) => (
            <tr
              onClick={() => props.updateCurrentMovie(movie)}
              className="rows"
            >
              <td>{movie.id}</td>
              <td>{movie.name}</td>
              <td>{movie.directedBy}</td>
              <td>{movie.country}</td>
              <td>
                {movie.budget}{" "}
                <FormattedPlural
                  value={movie.budget}
                  one={<FormattedMessage id="Million" />}
                  other={<FormattedMessage id="Millions" />}
                />
              </td>
              <td>
                <FormattedDate
                  value={new Date(movie.releaseDate)}
                  year="numeric"
                  month="long"
                  day="numeric"
                  weekday="long"
                />
              </td>
              <td>
                <FormattedNumber value={movie.views} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </React.Fragment>
  );
};
export default MovieList;
